import { IncomingChatEvents, OutcomingChatEvents } from 'entities/chat/api/events';
import { IncomingRoomEvents, OutcomingRoomEvents } from 'entities/room/api/events';
import { OutcomingUserEvents } from 'entities/user/api/events';

type EmitSocketCallback<D = any> = (response: D) => void;

type EmitEvents<D, R = any> = {
    [key in keyof D]: (arg: D[key], callback?: EmitSocketCallback<R>) => void;
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
