export enum RoomEvent {
    CREATE = 'CREATE_ROOM',
    CREATE_ROOM_SUCCESS = 'CREATE_ROOM_SUCCESS',
}

export interface OutcomingRoomEvents {
    [RoomEvent.CREATE]: number;
}

export interface IncomingRoomEvents {
    [RoomEvent.CREATE_ROOM_SUCCESS]: number;
}
