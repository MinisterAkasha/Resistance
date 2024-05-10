import { Box } from '@chakra-ui/react';
import React from 'react';
import { AuthWidget } from 'widgets/auth';
import { Chat } from 'widgets/chat';
import { CreateRoomWidget } from 'widgets/joinRoom';

export const HomePage = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Box border="1px solid black" p="3rem" borderRadius="20px" w="60%">
                <AuthWidget />
                <Box mt="2rem">
                    <CreateRoomWidget />
                </Box>
            </Box>
        </Box>
    );
};
