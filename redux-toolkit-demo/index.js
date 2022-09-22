const { cakeActions } = require('./app/features/cakeSlice');
const { icecreamActions } = require('./app/features/icecreamSlice');
const { chocolateActions } = require('./app/features/chocolateSlice');
const { fetchUsers } = require('./app/features/userSlice')

const store = require('./app/store');

console.log('Initial State: ', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('Updated State: ', store.getState());
})

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(1))
// store.dispatch(cakeActions.restocked(15))
// store.dispatch(cakeActions.restocked(2))

// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.restocked(1))
// store.dispatch(icecreamActions.restocked(15))
// store.dispatch(icecreamActions.restocked(2))

// store.dispatch(chocolateActions.ordered())
// store.dispatch(chocolateActions.ordered())
// store.dispatch(chocolateActions.ordered())
// store.dispatch(chocolateActions.restocked(1))
// store.dispatch(chocolateActions.restocked(15))
// store.dispatch(chocolateActions.restocked(2))

store.dispatch(fetchUsers());

// unsubscribe();