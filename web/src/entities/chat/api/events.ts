import { MessageType } from '../model/types';

export enum ChatEvents {
    SEND_MESSAGE = 'SEND_MESSAGE',
    GET_MESSAGES = 'GET_MESSAGES',
}

export interface OutcomingChatEvents {
    [ChatEvents.SEND_MESSAGE]: OmitID<MessageType>;
}

export interface IncomingChatEvents {
    [ChatEvents.GET_MESSAGES]: MessageType[];
}
