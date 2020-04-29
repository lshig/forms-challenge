import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import form from './form/reducers';
import navigation from './navigation/reducers';
import timer from './timer/reducers';

const loggerMiddleware = createLogger();
const rootReducer = combineReducers({
  form,
  navigation,
  timer
});

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
}
