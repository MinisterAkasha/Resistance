import React, { useCallback, useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { ChatWindow } from 'entities/chat/ui/ChatWindow';
import { SendMessage } from 'features/sendMessage';
import { useGetMessagesQuery } from 'entities/chat/api';
import { useForm } from 'react-hook-form';

export const Chat = () => {
    const { data: messages } = useGetMessagesQuery();

    const methods = useForm();
    // const [messages, setMessages] = useState<MessageType[]>([]);

    return (
        <Box>
            <ChatWindow messages={messages || []} />
            <SendMessage />
        </Box>
    );
};
