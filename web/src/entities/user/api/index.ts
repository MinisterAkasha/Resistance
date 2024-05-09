import { rootApi, socketEmitAsPromise, socketListenAsPromise } from 'shared/api';
import { ChatEvents, MessageType } from 'shared/api/events/chat';
import { UserEvents } from 'shared/api/events/user';
import { getSocket } from 'shared/socket';

export const eventUserApi = rootApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (build) => ({
        // getMessages: build.query<MessageType[], void>({
        //     queryFn: async () => socketListenAsPromise(ChatEvents.GET_MESSAGES),
        //     async onCacheEntryAdded(arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
        //         const socket = getSocket();

        //         const listener = (data: MessageType[]) => {
        //             updateCachedData(() => {
        //                 return data;
        //             });
        //         };

        //         try {
        //             await cacheDataLoaded;

        //             socket.on(ChatEvents.GET_MESSAGES, listener);
        //         } catch (err) {
        //             console.error(err);
        //         }

        //         await cacheEntryRemoved;
        //         socket.removeListener(ChatEvents.GET_MESSAGES, listener);
        //     },
        // }),
        // TODO типизировать
        sendUserData: build.mutation<void, MessageType>({
            queryFn: async (userData) => socketEmitAsPromise(UserEvents.SEND_USER_DATA, userData),
        }),
    }),
});

export const { useSendUserDataMutation } = eventUserApi;
