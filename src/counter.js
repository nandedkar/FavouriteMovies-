const redux = require('redux');
const createStore = redux.createStore;
const initialState = {
    counter: 0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC_COUNTER': return {
            ...state,
            counter: state.counter + 1
        }
        case 'DEC_COUNTER': return {
            ...state,
            counter: state.counter - 1
        }
        case 'ADD_VALUE': return {
            ...state,
            counter: state.counter + action.value
        }
        default: return state
    }

}
const store = createStore(reducer);

console.log('initial state :',store.getState());
store.subscribe(() => console.log('updated state :', store.getState()))
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'DEC_COUNTER' });
store.dispatch({ type: 'ADD_VALUE', value : 10 });

