import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationShema = {
    field: {
        user: [
            {
                validator: Validators.required,
                message: 'Campo requerido',   
            }, 
            {
                validator: Validators.email,
                message: 'Por favor introduzca una cuenta de correo válida'
            }
        ],
        password: [
            {
                validator: Validators.required,
                message: 'Campo requerido',   
            }
        ]
    }
};

export const formValidation = createFormValidation(validationShema);