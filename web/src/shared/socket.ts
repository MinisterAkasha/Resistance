import { io, Socket } from 'socket.io-client';

import { ClientToServerEvents, ServerToClientEvents } from './api/types';

// "undefined" means the URL will be computed from the `window.location` object
// const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:4000';
const URL = process.env.NODE_ENV === 'production' ? 'http://localhost:8080' : 'http://localhost:8080';

const createSocketFactory = () => {
    let socket: Socket<ServerToClientEvents, ClientToServerEvents>;

    return (): Socket<ServerToClientEvents, ClientToServerEvents> => {
        if (!socket) {
            socket = io(URL, {
                transports: ['websocket', 'polling'],
                withCredentials: true,
            });
        }

        if (socket.disconnected) {
            socket.connect();
        }

        return socket;
    };
};

export const getSocket = createSocketFactory();
