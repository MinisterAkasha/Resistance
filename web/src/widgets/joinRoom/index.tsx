import React from 'react';
import { CreateRoomButton } from 'features/createRoom/ui/CreateRoomButton';
import { FindRoom } from 'features/findRoom';
import { Box } from '@chakra-ui/react';

export const CreateRoomWidget = () => {
    return (
        <Box width="100%" display="flex" justifyContent="space-between" alignContent="center">
            <CreateRoomButton />
            <FindRoom />
        </Box>
    );
};
