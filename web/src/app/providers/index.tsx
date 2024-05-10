import React, { PropsWithChildren, useEffect } from 'react';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'app/providers/routes';
import { Theme } from 'app/providers/theme';
import { store } from 'app/store';
import { getSocket } from 'shared/socket';
import { Layout } from 'app/Layout';

export const AppProvider = ({ children }: PropsWithChildren) => {
    // useEffect(() => {
    //     // eslint-disable-next-line
    //     const userName = window.prompt('Enter user name');

    //     socket.on('connect', () => {
    //         socket.emit('LOGIN_USER', userName);
    //     });

    //     socket.on('disconnect', () => {
    //         socket.emit('LOGOUT_USER', userName);
    //     });

    //     return () => {
    //         socket.off('connect');
    //     };
    // }, []);

    return (
        <Provider store={store}>
            <ChakraProvider>
                <RouterProvider />
                <Theme>
                    <Layout>{children}</Layout>
                </Theme>
            </ChakraProvider>
        </Provider>
    );
};
