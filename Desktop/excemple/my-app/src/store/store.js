import {configureStore} from '@reduxjs/toolkit';
import listSlice from '../features/listSlice';
import loginSlice from '../features/loginSlice';


export const store = configureStore({
    reducer:{
        login:loginSlice,
        list:listSlice
    },
})