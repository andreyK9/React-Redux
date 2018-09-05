import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import logger from '../middlewares/logger';
import randomId from '../middlewares/randomid';
import api from '../middlewares/api';

const enhancer = applyMiddleware(logger, randomId, api)

const store = createStore(reducer, {}, enhancer)

// dev only
window.store = store

export default store;