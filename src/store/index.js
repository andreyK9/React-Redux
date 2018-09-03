import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import logger from '../middlewares';
import { applyMiddleware } from 'C:/Users/Andrey/AppData/Local/Microsoft/TypeScript/3.0/node_modules/redux';

const enhancer = applyMiddleware(logger)

const store = createStore(reducer, {}, enhancer)

// dev only
window.store = store

export default store;