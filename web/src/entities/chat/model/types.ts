import { User } from 'entities/user/model/types';

export interface MessageType1 {
    from: User;
    text: string;
    id: string;
    chatId?: string;
    date?: any;
}
