const { createSlice } = require('@reduxjs/toolkit');


const initialState = {
    noOfChocolate: 30
}

const chocolateSlice = createSlice({
    name: 'chocolate',
    initialState,
    reducers: {
        ordered: (state) => {
            state.noOfChocolate--;
        },

        restocked: (state, action) => {
            state.noOfChocolate += action.payload;
        }
    }

})


module.exports = chocolateSlice.reducer;
module.exports.chocolateActions = chocolateSlice.actions;