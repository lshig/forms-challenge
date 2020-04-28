import { combineReducers } from 'redux';
import form from './Form/formState/reducers';
import navigation from './Form/navigationState/reducers';
import timer from './Form/timerState/reducers';

export default combineReducers({
  form,
  navigation,
  timer
});
