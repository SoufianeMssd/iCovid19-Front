import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';

export default function configureStore() {
  const middlewareEnhancer = applyMiddleware(thunkMiddleware);

  const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(rootReducer, composedEnhancers(middlewareEnhancer))

  return store
}