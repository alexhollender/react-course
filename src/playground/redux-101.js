import { createStore } from 'redux';

// Action generator
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({ value }) => ({
  type: 'SET',
  value
})

// Reducers
// 1. Reducers are pure functions - they don't use or change anything outside of the function scope
// 2. Never change state or action

// we can have multiple reducers and combine them
// use a single reducer for each root property in our store

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      console.log(action);
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.value
      };
    default:
      return state;
    }
};

// Create store

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions - object that gets sent to the store, eg increment

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount( { decrementBy: 10 }));

store.dispatch(setCount({ value: 101 }));
