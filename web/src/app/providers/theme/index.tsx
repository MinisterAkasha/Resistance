import React, { PropsWithChildren } from 'react';
import { ChakraBaseProvider, extendBaseTheme, theme as chakraTheme } from '@chakra-ui/react';

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
    components: {
        Button,
    },
});

export const Theme = ({ children }: PropsWithChildren) => {
    return <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>;
};
