const { createStore, bindActionCreators, combineReducers } = require('redux')



const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

const cakeOrder = () => {
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}

const cakeRestock = (qty = 1) => {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}


const iceCreamOrder = () => {
    return {
        type: ICECREAM_ORDERED,
        payload: 1
    }
}

const iceCreamRestock = (qty = 1) => {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}


const initialCakeState = {
    numberOfCakes: 10,
};

const initialIceCreamState = {
    numberOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - action.payload
            }

        case CAKE_RESTOCKED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + action.payload
            }

        default:
            return state;
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - action.payload
            }

        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams + action.payload
            }

        default:
            return state;
    }
}


const reducers = combineReducers({ cakeReducer, iceCreamReducer });


const store = createStore(reducers);
console.log("intial store", store.getState())

const unsubscribe = store.subscribe(() => {
    console.log("Updated state", store.getState())
})



const actions = bindActionCreators({ cakeOrder, cakeRestock, iceCreamOrder, iceCreamRestock }, store.dispatch)

actions.cakeOrder()
actions.cakeOrder()
actions.cakeOrder()
actions.cakeRestock()
actions.cakeRestock(5)
actions.cakeRestock(10)

actions.iceCreamOrder()
actions.iceCreamOrder()
actions.iceCreamOrder()
actions.iceCreamRestock()
actions.iceCreamRestock(5)
actions.iceCreamRestock(10)



unsubscribe();

