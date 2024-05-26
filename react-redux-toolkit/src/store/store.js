import { configureStore } from '@reduxjs/toolkit';

import couterSlice from './counterSlice';

export const store = configureStore({
    reducer: {
        counter: couterSlice
    }
})