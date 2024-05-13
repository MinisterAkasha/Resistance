import { Events, SocketType, ServerType } from 'types';
import { guid } from 'utils';

export const chatController = (socket: SocketType, io: ServerType) => {
    socket.join(['room']);

    socket.on(Events.ChatEvents.SEND_MESSAGE, ({ text, from }, callback) => {
        console.log('get new message');
        messages.push({ text, from, id: guid() });

        io.to('room').emit(Events.ChatEvents.GET_MESSAGES, messages);
        callback({ status: 200 });
    });

    io.to('room').emit(Events.ChatEvents.GET_MESSAGES, messages);

    // socket.on('disconect', () => {
    //     socket.leave('room');
    // });
};
