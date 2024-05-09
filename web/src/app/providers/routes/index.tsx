import React from 'react';
import { createBrowserRouter, RouterProvider as RouterDomProvider } from 'react-router-dom';
import { HomePage } from 'pages/Home';
import { LobbyPage } from 'pages/Lobby';
import { RoomPage } from 'pages/Room';
import { Routes } from 'shared/routes';

const router = createBrowserRouter([
    {
        path: Routes.ROOT,
        element: <HomePage />,
    },
    {
        path: `${Routes.LOBBY}/:id`,
        element: <LobbyPage />,
    },
    {
        path: Routes.ROOM,
        element: <RoomPage />,
    },
]);

export const RouterProvider = () => {
    return <RouterDomProvider router={router} />;
};
