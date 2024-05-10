import { Button, Input } from '@chakra-ui/react';
import { useChangeUserDataMutation } from 'entities/user/api';
import { getUser } from 'entities/user/model/slice';
import { User } from 'entities/user/model/types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAppSelector } from 'shared/libs/store';

export const ChangeUser = () => {
    const [changeUser] = useChangeUserDataMutation();

    const user = useAppSelector(getUser);
    const { handleSubmit, register, reset } = useForm<OmitID<User>>({
        values: {
            name: user?.name || '',
        },
    });

    const onSubmit = (data: OmitID<User>) => {
        // console.log('data', data);
        changeUser(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register('name')} mb="1rem" />
            <Button type="submit" colorScheme="blue" variant="outline">
                Save
            </Button>
        </form>
    );
};
