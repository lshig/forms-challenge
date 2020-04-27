import {
  EARLY_STOP_TIMER,
  PROCEED_TIMER,
  RESET_TIMER,
  START_TIMER,
  STOP_TIMER,
  TIMER_DURATION
} from './constants';

export function earlyStopTimer(timeCounter, intervalId) {
  return { type: EARLY_STOP_TIMER, timeCounter, intervalId };
}
export function proceedTimer(timeCounter) {
  return { type: PROCEED_TIMER, timeCounter };
}
export function resetTimer(timeHandler) {
  return { type: RESET_TIMER, timeHandler };
}
export function startTimer(timeHandler) {
  return { type: START_TIMER, timeHandler };
}
export function stopTimer(intervalId) {
  return { type: STOP_TIMER, intervalId };
}
