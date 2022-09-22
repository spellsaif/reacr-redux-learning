
import { cakeActions } from '../cake/cakeSlice'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type InitialState = {
    noOfIceCreams: number
}



const initialState: InitialState = {
    noOfIceCreams: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: state => {
            state.noOfIceCreams--;
        },

        restocked: (state, action: PayloadAction<number>) => {
            state.noOfIceCreams += action.payload;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.noOfIceCreams--;
        })
    }
})


export default icecreamSlice.reducer;

export const icecreamActions = icecreamSlice.actions;