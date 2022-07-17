const redux = require('redux');

//Reducer Function
// condition : Should be a pure function
//(ex. must no send a Http request, write something to local Storage, fetch something from local Storage)

// feature
// Inputs : Old States + Dispatched Action
// Outputs : New State Object
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') return { counter: state.counter + 1 };
  if (action.type === 'decrement') return { counter: state.counter - 1 };
};

const store = redux.createStore(counterReducer); //createStore

console.log(store.getState());

//subscriptions
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' }); //Components
store.dispatch({ type: 'decrement' });

//Components -------------> Action ---> Reducer
//dispatch({type: ''})      counterReducer(state, action)
