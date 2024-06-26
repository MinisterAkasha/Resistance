import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';
import { getSocket } from 'shared/socket';
import { Link, useNavigate } from 'react-router-dom';
import { Routes } from 'shared/routes';
import { RoomEvent } from 'entities/room/api/events';

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
            <Button colorScheme="blue" variant="outline">
                Create Room
            </Button>
        </Link>
    );
};
