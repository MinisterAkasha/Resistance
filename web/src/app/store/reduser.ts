import { combineSlices } from '@reduxjs/toolkit';
import { userSlice } from 'entities/user/model/slice';
import { rootApi } from 'shared/api';

export const rootReduser = combineSlices(rootApi, userSlice);
