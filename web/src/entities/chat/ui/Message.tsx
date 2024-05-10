import React from 'react';
import { Box } from '@chakra-ui/react';

import { MessageType } from '../model/types';

export const Message = ({ text, from }: MessageType) => {
    return (
        <Box border="1px solid red" p={1} m={1}>
            {text}
        </Box>
    );
};
