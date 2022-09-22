const { configureStore } = require('@reduxjs/toolkit');
const cakeReducer = require('./features/cakeSlice');
const icecreamReducer = require('./features/icecreamSlice');
const chocolateReducer = require('./features/chocolateSlice');
const userReducer = require('./features/userSlice');

const { createLogger } = require('redux-logger');

const logger = createLogger();

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        chocolate: chocolateReducer,
        user: userReducer

    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})


module.exports = store;


