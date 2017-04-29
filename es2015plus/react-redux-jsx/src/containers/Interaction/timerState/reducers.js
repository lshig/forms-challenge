import {
  EARLY_STOP_TIMER,
  PROCEED_TIMER,
  RESET_TIMER,
  START_TIMER,
  STOP_TIMER,
  TIMER_DURATION
} from './constants'

const initialTimerState = {
  activeTime: true,
  dateTime: '',
  intervalId: '',
  sessionDuration: '0',
  timeCounter: TIMER_DURATION,
  timerStatus: 'Begin!'
}

const timer = (state = initialTimerState, action) => {
  switch (action.type) {
    case EARLY_STOP_TIMER:
      return Object.assign({}, state, {
        activeTime: false,
        dateTime: new Date().toISOString(),
        intervalId: clearInterval(action.intervalId),
        sessionDuration: (TIMER_DURATION - action.timeCounter - 1).toString(),
        timerStatus: 'Thanks for your submission!'
      })
    case PROCEED_TIMER:
      let minutes = parseInt(action.timeCounter / 60, 10)
      let seconds = parseInt(action.timeCounter % 60, 10)
      minutes = minutes < 10
        ? '0' + minutes
        : minutes
      seconds = seconds < 10
        ? '0' + seconds
        : seconds
      return Object.assign({}, state, {
        timerStatus: minutes + ':' + seconds,
        timeCounter: action.timeCounter - 1
      })
    case RESET_TIMER:
      const resetTimerId = setInterval(action.timeHandler, 1000)
      return {
        activeTime: true,
        dateTime: '',
        intervalId: resetTimerId,
        sessionDuration: '0',
        timeCounter: TIMER_DURATION,
        timerStatus: 'Another One!'
      }
    case START_TIMER:
      const startTimerId = setInterval(action.timeHandler, 1000)
      return {
        activeTime: true,
        dateTime: '',
        intervalId: startTimerId,
        sessionDuration: '0',
        timeCounter: TIMER_DURATION,
        timerStatus: 'Begin!'
      }
    case STOP_TIMER:
      return Object.assign({}, state, {
        activeTime: false,
        dateTime: new Date().toISOString(),
        intervalId: clearInterval(action.intervalId),
        sessionDuration: TIMER_DURATION.toString(),
        timerStatus: 'Time\'s up!'
      })
    default:
      return state
  }
}

export default timer
