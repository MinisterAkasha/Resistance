import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';
import { RoomEvent } from 'shared/api/events/room';
import { getSocket } from 'shared/socket';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { Routes } from 'shared/routes';

export const CreateRoomButton = () => {
    const [roomID, setRoomID] = useState<number>();
    const navigate = useNavigate();

    useEffect(() => {
        getSocket().on(RoomEvent.CREATE_ROOM_SUCCESS, (roomID) => {
            console.log('roomId', roomID);
            setRoomID(roomID);

            navigate(`${Routes.LOBBY}/${roomID}`);
        });
    }, [navigate]);

    const onClick = useCallback(() => {
        getSocket().emit(RoomEvent.CREATE, 1);
    }, []);

    return (
        <Link to={Routes.LOBBY} onClick={onClick}>
            Create Room
        </Link>
    );
};
