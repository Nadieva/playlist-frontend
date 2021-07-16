/* import { configureStore } from '@reduxjs/toolkit';
import songReducer from './songSlice';

export const store = configureStore({
  reducer: {
    song: songReducer,
  },
});
export default store;
*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
