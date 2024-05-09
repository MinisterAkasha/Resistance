import { Input, InputProps } from '@chakra-ui/react';
import React from 'react';

export const ChatInput = ({ value, onChange }: InputProps) => {
    return <Input value={value} onChange={onChange} />;
};
