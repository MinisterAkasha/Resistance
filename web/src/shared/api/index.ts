import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getSocket } from 'shared/socket';

import { URL } from '../socket';

const baseQuery = fetchBaseQuery({
    baseUrl: URL,
    credentials: 'same-origin',
});

export const rootApi = createApi({
    reducerPath: 'api',
    baseQuery,
    endpoints: () => ({}),
});

export const socketEmitAsPromise = <EmitEvent extends ClientToServerEventsMap>(
    eventName: EmitEvent,
    data: Parameters<ClientToServerEvents[EmitEvent]>[0],
) => {
    const socket = getSocket();

    return new Promise<any>((resolve, reject) => {
        // @ts-ignore
        socket.emit(eventName, data, (response) => {
            if (response.error) {
                reject(response);
            } else {
                resolve(response);
            }
        });
    });
};

export const socketListenAsPromise = async <
    N extends ServerToClientEventsMap,
    Data extends Parameters<ServerToClientEvents[N]>[0],
>(
    eventName: N,
): Promise<Record<'data', Data>> => {
    const socket = getSocket();

    return new Promise((resolve) => {
        const listener = (data: Data) => {
            resolve({ data });
        };

        // @ts-ignore
        socket.on(eventName, listener);
    });
};
