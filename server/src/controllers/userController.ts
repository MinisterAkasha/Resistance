import { Events, SocketType, ServerType } from 'types';
import { IUser } from 'models/user';
import { guid } from 'utils';

export const userController = (socket: SocketType, io: ServerType) => {
    socket.on(Events.UserEvents.CHANGE, (userData: IUser, callback) => {
        callback();

        // FIXME fix user validation
        users = users.map((user) => {
            return user.id !== socket.handshake.auth
                ? user
                : {
                      ...user,
                      ...userData,
                  };
        });
    });

    socket.on(Events.UserEvents.LOGIN, (userData, callback) => {
        const userId = socket.handshake.auth.uuid ?? guid();
        socket.handshake.auth = userId;

        const response = { ...userData, id: userId };

        callback(response);

        // FIXME fix user validation
        if (!users.find((user) => user.id === userId)) {
            users.push(response);
        }
    });

    socket.on('disconnect', () => {
        const userId = socket.handshake.auth;
        // FIXME fix user validation
        users = users.filter((user) => user.id !== userId);
    });
};
