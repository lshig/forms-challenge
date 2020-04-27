import { combineReducers } from 'redux';
import form from './Interaction/formState/reducers';
import navigation from './Interaction/navigationState/reducers';
import timer from './Interaction/timerState/reducers';

export default combineReducers({
  form,
  navigation,
  timer
});
