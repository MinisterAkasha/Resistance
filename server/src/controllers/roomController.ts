import { Events, SocketType, ServerType } from 'types';
import { guid } from 'utils';

export const roomController = (socket: SocketType, io: ServerType) => {
    socket.on(Events.RoomEvent.CREATE, () => {
        const roomID = guid();

        rooms.push(roomID);
        socket.join(String(roomID));

        socket.emit(events.RoomEvent.GET_NEW_ROOM_ID, roomID);
    });
};
