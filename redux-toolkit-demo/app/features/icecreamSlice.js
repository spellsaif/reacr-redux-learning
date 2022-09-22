const { createSlice } = require("@reduxjs/toolkit");
const { cakeActions } = require("./cakeSlice");


const initialState = {
    noOfIceCreams: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: state => {
            state.noOfIceCreams--;
        },

        restocked: (state, action) => {
            state.noOfIceCreams += action.payload;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.noOfIceCreams--;
        })
    }
})


module.exports = icecreamSlice.reducer;

module.exports.icecreamActions = icecreamSlice.actions;