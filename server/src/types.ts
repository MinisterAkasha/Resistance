enum ChatEvents {
    SEND_MESSAGE = 'SEND_MESSAGE',
    GET_MESSAGES = 'GET_MESSAGES',
}

enum RoomEvent {
    CREATE = 'CREATE_ROOM',
    CREATE_ROOM_SUCCESS = 'CREATE_ROOM_SUCCESS',
    GET_NEW_ROOM_ID = 'GET_NEW_ROOM_ID',
}

enum UserEvents {
    CHANGE = 'CHANGE_USER',
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
}

export const events = {
    ChatEvents,
    RoomEvent,
    UserEvents,
};
