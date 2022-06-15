import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import messageReducer from './message/message';

const reducers = combineReducers({
  messageReducer,
});

const store = createStore(reducers, applyMiddleware(logger, thunk));

export default store;
