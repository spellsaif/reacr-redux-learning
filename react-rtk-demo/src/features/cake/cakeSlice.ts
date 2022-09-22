import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type InitialState = {
    noOfCakes: number
}

const initialState: InitialState = {
    noOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: state => {
            state.noOfCakes--;
        },

        restocked: (state, action: PayloadAction<number>) => {
            state.noOfCakes += action.payload
        }
    }

})

export default cakeSlice.reducer;
export const cakeActions = cakeSlice.actions