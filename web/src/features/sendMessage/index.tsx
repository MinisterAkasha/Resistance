import React, { useCallback } from 'react';
import { Button, Input } from '@chakra-ui/react';
import { MessageType } from 'shared/api/events/chat';
import { useSendMessageMutation } from 'entities/chat/api';
import { useForm } from 'react-hook-form';

export const SendMessage = () => {
    const [send] = useSendMessageMutation();
    const { handleSubmit, reset, register } = useForm<MessageType>({
        defaultValues: {
            from: 'Ilya',
            text: '',
            chatId: '11-22-33-44',
        },
    });

    const onSubmit = useCallback(
        (data: MessageType) => {
            send(data);
            reset();
        },
        [send, reset],
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register('text')} />
            <Button type="submit">Send</Button>
        </form>
    );
};
