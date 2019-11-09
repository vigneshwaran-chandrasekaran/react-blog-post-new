import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const middlewares = [thunk];

// STORE
const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
);

store.subscribe(()=>{
    console.log(store.getState());
});

export default store;