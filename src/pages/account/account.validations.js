import { Validators, createFormValidation } from '@lemoncode/fonk'

const validationsShema = {
    field: {
        type: [ Validators.required],
        alias: [Validators.required],
    }
};

export const formValidations = createFormValidation(validationsShema);