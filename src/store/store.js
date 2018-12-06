import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducer/index';


let middleware = [thunkMiddleware];
let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
  middleware = [...middleware];
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }
}

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      ...middleware
    )
  )
);

export default store;
