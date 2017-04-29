import {combineReducers} from 'redux'
import form from './Interaction/formState/reducers'
import navigation from './Interaction/navigationState/reducers'
import timer from './Interaction/timerState/reducers'
const formsApp = combineReducers({
  form,
  navigation,
  timer
})
export default formsApp
