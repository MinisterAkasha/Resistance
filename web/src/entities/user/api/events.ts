export enum UserEvents {
    SEND_USER_DATA = 'SEND_USER_DATA',
}

export interface OutcomingUserEvents {
    [UserEvents.SEND_USER_DATA]: any;
}

// export interface IncomingUserEvents {
//     [ChatEvents.GET_MESSAGES]: MessageType[];
// }
