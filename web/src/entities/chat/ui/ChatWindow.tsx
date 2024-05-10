import React from 'react';
import { Box } from '@chakra-ui/react';

import { MessageType } from '../model/types';

import { Message } from './Message';

interface ChatWindowProps {
    messages: MessageType[];
}

export const ChatWindow = ({ messages }: ChatWindowProps) => {
    return (
        <Box>
            {messages.map((message) => (
                <Message key={message.id} {...message} />
            ))}
        </Box>
    );
};
