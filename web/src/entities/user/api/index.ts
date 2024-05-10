import { rootApi, socketEmitAsPromise, socketListenAsPromise } from 'shared/api';
import { getSocket } from 'shared/socket';
import { USER_ID_LC_KEY, USER_NICKANME_LC_KEY } from 'shared/consts/user';

import { User } from '../model/types';
import { changeUser } from '../model/slice';

import { UserEvents } from './events';

export const eventUserApi = rootApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (build) => ({
        changeUserData: build.mutation<void, OmitID<User>>({
            queryFn: async (userData) => {
                return socketEmitAsPromise(UserEvents.CHANGE, userData);
            },
            async onCacheEntryAdded(arg, { dispatch }) {
                localStorage.setItem(USER_NICKANME_LC_KEY, arg.name);
                dispatch(changeUser(arg));
            },
        }),
        auth: build.query<User, void>({
            queryFn: async () => {
                const socket = getSocket();

                const userNickname = localStorage.getItem(USER_NICKANME_LC_KEY) ?? undefined;
                const userId = localStorage.getItem(USER_ID_LC_KEY) ?? undefined;

                return new Promise((resolve) => {
                    socket.on('connect', () => {
                        socket.emit(UserEvents.LOGIN, { name: userNickname, id: userId }, (response) => {
                            localStorage.setItem(USER_ID_LC_KEY, response.id);
                            resolve({ data: response });
                        });
                    });
                });
            },
        }),
    }),
});

export const { useChangeUserDataMutation, useAuthQuery } = eventUserApi;
