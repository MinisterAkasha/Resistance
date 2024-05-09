import React from 'react';
import { AuthWidget } from 'widgets/auth';
import { Chat } from 'widgets/chat';
import { CreateRoomWidget } from 'widgets/createRoom';

export const HomePage = () => {
    return (
        <div>
            <AuthWidget />
            <Chat />
            <CreateRoomWidget />
        </div>
    );
};
