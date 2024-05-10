declare type RootState = ReturnType<typeof import('./store').store.getState>;
declare type AppDispatch = typeof import('./store').store.dispatch;

declare type ClientToServerEvents = import('./socket').ClientToServerEvents;
declare type ServerToClientEvents = import('./socket').ServerToClientEvents;

declare type ServerToClientEventsMap = keyof ServerToClientEvents;
declare type ClientToServerEventsMap = keyof ClientToServerEvents;
