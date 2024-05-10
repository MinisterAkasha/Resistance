import { User } from '../model/types';

export enum UserEvents {
    CHANGE = 'CHANGE_USER',
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
}

export interface OutcomingUserEvents {
    [UserEvents.CHANGE]: User;
    [UserEvents.LOGIN]: Partial<User>;
    [UserEvents.LOGOUT]: string;
}

// export interface IncomingUserEvents {
//     [UserEvents.AUTH]: User;
// }
