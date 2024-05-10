import { io, Socket } from 'socket.io-client';

import { USER_ID_LC_KEY } from './consts/user';

// import { ClientToServerEvents, ServerToClientEvents } from './api/types';

// "undefined" means the URL will be computed from the `window.location` object
// const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:4000';
const PORT = 8081;
export const URL = process.env.NODE_ENV === 'production' ? `http://localhost:${PORT}` : `http://localhost:${PORT}`;

const createSocketFactory = () => {
    let socket: Socket<ServerToClientEvents, ClientToServerEvents>;

    return (): Socket<ServerToClientEvents, ClientToServerEvents> => {
        if (!socket) {
            socket = io(URL, {
                transports: ['websocket', 'polling'],
                withCredentials: true,
                auth: (cb) => {
                    cb({ uuid: localStorage.getItem(USER_ID_LC_KEY) });
                },
            });
        }

        if (socket.disconnected) {
            socket.connect();
        }

        return socket;
    };
};

export const getSocket = createSocketFactory();
