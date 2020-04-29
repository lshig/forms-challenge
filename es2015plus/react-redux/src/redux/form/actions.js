import {
  AUTOFILL_FORM,
  INPUT_VALUE,
  RESET_FORM,
  SUBMIT_FORM
} from './constants';

export function autofillForm() {
  return { type: AUTOFILL_FORM };
}
export function inputValue(name, value) {
  return { type: INPUT_VALUE, name, value };
}
export function resetForm() {
  return { type: RESET_FORM };
}
export function submitForm() {
  return { type: SUBMIT_FORM };
}
