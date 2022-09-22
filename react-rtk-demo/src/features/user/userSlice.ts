import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type User = {
    id: number
    name: string
}

type InitialState = {
    loading: boolean
    users: Array<User>
    error: string
}

const initialState: InitialState = {
    loading: false,
    users: [],
    error: ''
}

//createAsyncThunk generates pending, fulfilled, rejected action types
export const fetchUsers = createAsyncThunk('user/fetchUser', async () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => response.data.m)
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<Array<User>>) => {
            state.loading = false;
            state.users = action.payload;
        });

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.error = action.error.message || 'Something went wrong!';
        });

    },

    reducers: {
    }
})


export default userSlice.reducer;


