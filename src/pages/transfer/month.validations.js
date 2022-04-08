import { parseMessageWithCustomArgs } from '@lemoncode/fonk';

let defaultMessage = 'Introduzca un mes correcto (1 al 12)';

export const setErrorMessage = message => (defaultMessage = message);

const hasValidMonth = (value) => value <= 12;

export const monthValidator = fieldValidatorArgs => {
  const { value, message = defaultMessage } = fieldValidatorArgs;

  const validationResult = {
    succeeded: false,
    message: parseMessageWithCustomArgs(message),
  };

  if (hasValidMonth(value)) {
    validationResult.succeeded = true;
    validationResult.message = '';
  }

  return validationResult;
};