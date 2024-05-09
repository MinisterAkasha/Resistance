import { Button, Input } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';

export const SendName = () => {
    const { handleSubmit, register, reset } = useForm();

    const onSubmit = (data: any) => {
        console.log('data', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input />
            <Button type="submit">Send</Button>
        </form>
    );
};
