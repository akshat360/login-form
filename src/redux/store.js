import { createStore } from 'redux';
import authReducer from './reducers/authReducer';

//creating store with reducer
const store = createStore(authReducer);
export default store;
