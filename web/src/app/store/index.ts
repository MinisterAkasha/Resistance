import { configureStore } from '@reduxjs/toolkit';
import { rootApi } from 'shared/api';

import { rootReduser } from './reduser';

export const store = configureStore({
    reducer: rootReduser,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rootApi.middleware),
});
