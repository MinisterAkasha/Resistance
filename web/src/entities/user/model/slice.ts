import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { User } from './types';

interface UserState {
    user: Nullable<User>;
}

const initialState: UserState = {
    user: null,
} satisfies UserState as UserState;

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        initUser(state, action: PayloadAction<User>) {
            state.user = action.payload;
        },
        changeUser(state, action: PayloadAction<OmitID<User>>) {
            if (state?.user) {
                state.user = {
                    ...state.user,
                    ...action.payload,
                };
            }
        },
    },
    selectors: {
        getUser: (state) => state.user,
    },
});

export const { initUser, changeUser } = userSlice.actions;
export const { getUser } = userSlice.selectors;
