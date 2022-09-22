import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/icecream/icecreamSlice';
import chocolateReducer from '../features/chocolate/chocolateSlice';
import userReducer from '../features/user/userSlice';




const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        chocolate: chocolateReducer,
        user: userReducer

    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})


export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

