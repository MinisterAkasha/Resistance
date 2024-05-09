import { IncomingChatEvents, OutcomingChatEvents } from './events/chat';
import { IncomingRoomEvents, OutcomingRoomEvents } from './events/room';
import { OutcomingUserEvents } from './events/user';

type EmitSocketCallback<D = any> = (response: D) => void;

type EmitEvents<D, R = any> = {
    [key in keyof D]: (arg: D[keyof D], callback?: EmitSocketCallback<R>) => void;
};
type ListensEvent<D> = {
    [key in keyof D]: (arg: D[keyof D]) => void;
};

export type ServerToClientEvents = ListensEvent<IncomingChatEvents> & ListensEvent<IncomingRoomEvents>;
export type ClientToServerEvents = EmitEvents<OutcomingChatEvents> &
    EmitEvents<OutcomingRoomEvents> &
    EmitEvents<OutcomingUserEvents>;

export type ServerToClientEventsMap = keyof ServerToClientEvents;
export type ClientToServerEventsMap = keyof ClientToServerEvents;
