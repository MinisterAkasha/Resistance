import { Box } from '@chakra-ui/react';
import { ChangeUser } from 'features/changeUser';
import React from 'react';

export const AuthWidget = () => {
    return (
        <Box justifyContent="center" alignContent="center" margin="0 auto">
            <ChangeUser />
        </Box>
    );
};
