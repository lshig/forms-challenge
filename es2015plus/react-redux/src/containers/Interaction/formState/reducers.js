import { setView } from '../utils';

import {
  AUTOFILL_FORM,
  INPUT_VALUE,
  RESET_FORM,
  SUBMIT_FORM
} from './constants';

const initialFormState = {
  comments: '',
  dateTime: '',
  day: '',
  firstName: '',
  lastName: '',
  month: '',
  timeOfDay: '',
  weekday: [],
  year: ''
};

const form = (state = initialFormState, action) => {
  switch (action.type) {
    case AUTOFILL_FORM:
      const autofillData = {
        comments: 'Hello, World!',
        firstName: 'Jane',
        lastName: 'Doe',
        day: '14',
        month: '3',
        timeOfDay: 'Late Night',
        weekday: ['Sunday', 'Thursday', 'Friday', 'Saturday'],
        year: '2015'
      };
      setView(autofillData);
      return autofillData;
    case INPUT_VALUE:
      const result = {};
      result[action.name] = action.value;
      return Object.assign({}, state, result);
    case RESET_FORM:
      const resetData = {
        comments: '',
        dateTime: '',
        day: '',
        firstName: '',
        lastName: '',
        month: '',
        timeOfDay: '',
        weekday: [],
        year: ''
      };
      setView(resetData);
      return resetData;
    case SUBMIT_FORM:
      return state;
    default:
      return state;
  }
};

export default form;
