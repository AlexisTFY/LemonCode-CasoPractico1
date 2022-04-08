import { parseMessageWithCustomArgs } from '@lemoncode/fonk';

let defaultMessage = 'Introduzca un año correcto (Año superior al  2022)';

export const setErrorMessage = message => (defaultMessage = message);

const hasValidYear = (value) => value >= 2022;

export const yearValidator = fieldValidatorArgs => {
  const { value, message = defaultMessage } = fieldValidatorArgs;

  const validationResult = {
    succeeded: false,
    message: parseMessageWithCustomArgs(message),
  };

  if (hasValidYear(value)) {
    validationResult.succeeded = true;
    validationResult.message = '';
  }

  return validationResult;
};