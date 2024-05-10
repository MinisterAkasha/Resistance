import http from 'http';
import express from 'express';
import cors from 'cors';
import { Server, Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { guid } from './utils';

const PORT = process.env.port ?? 8081;

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
    },
});

let users = [];
const messages = [];
const rooms = [];

// app.get('/GET_MESSAGES', (req, res) => {
//     return res.json(messages);
// });

type SocketType = Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;

const chatController = (socket: SocketType) => {
    socket.join(['room']);

    socket.on('SEND_MESSAGE', ({ text, from }, callback) => {
        console.log('get new message');
        messages.push({ text, from, id: guid() });

        io.to('room').emit('GET_MESSAGES', messages);
        callback({ status: 200 });
    });

    io.to('room').emit('GET_MESSAGES', messages);

    // socket.on('disconect', () => {
    //     socket.leave('room');
    // });
};

const roomController = (socket: SocketType) => {
    socket.on('CREATE_ROOM', () => {
        const roomID = guid();

        rooms.push(roomID);
        socket.join(String(roomID));

        socket.emit('GET_NEW_ROOM_ID', roomID);
    });
};

interface User {
    name: string;
    id: string | undefined;
    avatar?: string;
}

const userController = (socket: SocketType) => {
    socket.on('CHANGE_USER', (userData: User, callback) => {
        const userId = guid();
        callback({ userId });

        users.push({ userData, id: userId });
    });

    socket.on('LOGIN', (userData, callback) => {
        const userId = socket.handshake.auth.uuid ?? guid();
        socket.handshake.auth = userId;

        callback(userId);

        if (!users.find((user) => user.id === userId)) {
            users.push({ ...userData, id: userId });
        }
    });

    socket.on('disconnect', () => {
        const userId = socket.handshake.auth;
        users = users.filter((user) => user.id !== userId);
    });
};

io.on('connection', (socket) => {
    // console.log('a user connected', socket.handshake.query);

    chatController(socket);
    roomController(socket);
    userController(socket);
});

server.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});
