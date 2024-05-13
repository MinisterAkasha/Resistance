import http from 'http';
import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';
import { userController } from 'controllers/userController';
import { roomController } from 'controllers/roomController';
import { chatController } from 'controllers/chatController';

const PORT = process.env.port ?? 8080;

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
    },
    connectionStateRecovery: {},
});

io.on('connection', (socket) => {
    chatController(socket, io);
    roomController(socket, io);
    userController(socket, io);
});

server.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});
