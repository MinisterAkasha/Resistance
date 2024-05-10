import { useEffect } from 'react';
import { useAppDispatch } from 'shared/libs/store';

import { useAuthQuery } from '../api';
import { initUser } from '../model/slice';

export const useInitUser = () => {
    const { data } = useAuthQuery();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!data) {
            return;
        }
        dispatch(initUser(data));
    }, [dispatch, data]);
};
