import { rootApi, socketEmitAsPromise, socketListenAsPromise } from 'shared/api';
import { getSocket } from 'shared/socket';
import { USER_ID_LC_KEY, USER_NICKANME_LC_KEY } from 'shared/consts/user';
import { useEffect } from 'react';

import { User } from '../model/types';

import { UserEvents } from './events';

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
        changeUserData: build.mutation<void, User>({
            queryFn: async (userData) => {
                return socketEmitAsPromise(UserEvents.CHANGE, userData);
            },
        }),
        auth: build.query<boolean, void>({
            queryFn: async () => {
                const socket = getSocket();

                const userNickname = localStorage.getItem(USER_NICKANME_LC_KEY) ?? undefined;
                const userId = localStorage.getItem(USER_ID_LC_KEY) ?? undefined;

                return new Promise((resolve) => {
                    socket.on('connect', () => {
                        socket.emit(UserEvents.LOGIN, { name: userNickname, id: userId }, (id) => {
                            localStorage.setItem(USER_ID_LC_KEY, id);
                            resolve({ data: true });
                        });
                    });
                });
            },
        }),
    }),
});

export const { useChangeUserDataMutation, useAuthQuery } = eventUserApi;
