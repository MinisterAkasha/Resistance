import React, { PropsWithChildren } from 'react';
import { useInitUser } from 'entities/user/lib/useInitUser';

export const Layout = ({ children }: PropsWithChildren) => {
    useInitUser();

    return <>{children}</>;
};
