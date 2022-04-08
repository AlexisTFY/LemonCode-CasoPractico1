import { Validators, createFormValidation } from '@lemoncode/fonk';
import {dayValidator } from './day.validations';
import { monthValidator } from './month.validations';
import { yearValidator } from './year.validations';

const validationsShema = {
    field: {
        iban: [ 
            { 
                validator: Validators.required,
                message: 'Campo requerido', 
            }, 
            {
                validator: Validators.pattern,
                customArgs: { pattern: new RegExp(/^([A-Z]{2})(\d{2}\s?)(\d{4}\s?){4}\d{4}$/) },
                message: 'Por favor introduzca una cuenta iban válida',
            }
        ],
        name: [ 
            { 
            validator: Validators.required,
            message: 'Campo requerido', 
            }
        ],
        amount: [
            { 
                validator: Validators.required,
                message: 'Campo requerido',
            },
            { 
            validator: Validators.pattern,
            customArgs: { pattern: new RegExp(/[0-9]{1,}/) },
            message: 'Por favor introduzca una número válido', 
            }
        ],
        concept: [ 
            { 
            validator: Validators.required,
            message: 'Campo requerido', 
            }
        ],
        notes: [ 
            { 
            validator: Validators.required,
            message: 'Campo requerido', 
            }
        ],
        day: [
            { 
                validator: Validators.required,
                message: 'Campo requerido', 
            },
            { 
                validator: dayValidator,
            }
        ],
        month: [
            { 
                validator: Validators.required,
                message: 'Campo requerido', 
            },
            { 
                validator: monthValidator,
            }
        ],
        year: [
            { 
                validator: Validators.required,
                message: 'Campo requerido', 
            },
            { 
                validator: yearValidator,
            }
        ],
        email: [ 
            { 
            validator: Validators.required,
            message: 'Campo requerido', 
            },
            {
                validator: Validators.email,
                message: 'Por favor introduzca una cuenta de correo válida'
            }
        ],
    }
};

export const formValidations = createFormValidation(validationsShema);