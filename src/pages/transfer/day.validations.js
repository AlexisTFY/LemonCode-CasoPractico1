import { parseMessageWithCustomArgs } from '@lemoncode/fonk';

let defaultMessage = 'Introduzca un día correcto (1 al 31)';

export const setErrorMessage = message => (defaultMessage = message);

const hasValidDay = (value) => value <= 31;

export const dayValidator = fieldValidatorArgs => {
  const { value, message = defaultMessage } = fieldValidatorArgs;

  const validationResult = {
    succeeded: false,
    message: parseMessageWithCustomArgs(message),
  };

  if (hasValidDay(value)) {
    validationResult.succeeded = true;
    validationResult.message = '';
  }

  return validationResult;
};