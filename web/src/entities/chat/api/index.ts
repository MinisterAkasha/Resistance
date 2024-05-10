import { rootApi, socketEmitAsPromise, socketListenAsPromise } from 'shared/api';
import { getSocket } from 'shared/socket';

import { MessageType } from '../model/types';

import { ChatEvents } from './events';

export const eventChatApi = rootApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (build) => ({
        getMessages: build.query<MessageType[], void>({
            queryFn: async (...args) => {
                console.log('args', args, args[1].getState());

                return socketListenAsPromise(ChatEvents.GET_MESSAGES);
            },
            async onCacheEntryAdded(arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
                const socket = getSocket();

                const listener = (data: MessageType[]) => {
                    updateCachedData(() => {
                        return data;
                    });
                };

                try {
                    await cacheDataLoaded;

                    socket.on(ChatEvents.GET_MESSAGES, listener);
                } catch (err) {
                    console.error(err);
                }

                await cacheEntryRemoved;
                socket.removeListener(ChatEvents.GET_MESSAGES, listener);
            },
        }),
        // TODO типизировать
        sendMessage: build.mutation<void, MessageType>({
            queryFn: async (message) => socketEmitAsPromise(ChatEvents.SEND_MESSAGE, message),
        }),
    }),
});

export const { useGetMessagesQuery, useSendMessageMutation } = eventChatApi;
