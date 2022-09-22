import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type InitialState = {
    noOfChocolate: number
}



const initialState: InitialState = {
    noOfChocolate: 30
}

const chocolateSlice = createSlice({
    name: 'chocolate',
    initialState,
    reducers: {
        ordered: (state) => {
            state.noOfChocolate--;
        },

        restocked: (state, action: PayloadAction<number>) => {
            state.noOfChocolate += action.payload;
        }
    }

})


export default chocolateSlice.reducer;
export const chocolateActions = chocolateSlice.actions;