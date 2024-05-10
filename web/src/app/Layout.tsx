import { useAuthQuery } from 'entities/user/api';
import React, { PropsWithChildren } from 'react';

export const Layout = ({ children }: PropsWithChildren) => {
    useAuthQuery();

    return <>{children}</>;
};
