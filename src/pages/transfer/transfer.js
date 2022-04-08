import { getAccountList, insertTransfer } from './transfer.api';
import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors, onSetValues } from '../../common/helpers';
import { history } from '../../core/router';
import { setAccountOptions } from './transfer.helpers';
import { formValidations } from './transfer.validations';

const params = history.getParams();

let transfer = {
    id: '',
    iban: '',
    name: '',
    amount: '',
    concept: '',
    notes: '',
    email: '',
    day: '',
    month: '',
    year: '',
    date: '',
    description: 'Transferencia',
};

onUpdateField('iban', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        iban:value,
    };
    formValidations.validateField('iban', transfer.iban).then(result => {
        onSetError('iban', result);
    })
});

onUpdateField('name', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        name:value,
    };
    formValidations.validateField('name', transfer.name).then(result => {
        onSetError('name', result);
    })
});

onUpdateField('amount', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        amount:value,
    };
    formValidations.validateField('amount', transfer.amount).then(result => {
        onSetError('amount', result);
    })
});

onUpdateField('concept', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        concept:value,
    };
    formValidations.validateField('concept', transfer.concept).then(result => {
        onSetError('concept', result);
    })
});

onUpdateField('notes', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        notes:value,
    };
    formValidations.validateField('notes', transfer.notes).then(result => {
        onSetError('notes', result);
    })
});

onUpdateField('day', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        day:value,
    };
    formValidations.validateField('day', transfer.day).then(result => {
        onSetError('day', result);
    })
});

onUpdateField('month', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        month:value,
    };
    formValidations.validateField('month', transfer.month).then(result => {
        onSetError('month', result);
    })
});

onUpdateField('year', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        year:value,
    };
    formValidations.validateField('year', transfer.year).then(result => {
        onSetError('year', result);
    })
});

onUpdateField('email', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        email:value,
    };
    formValidations.validateField('email', transfer.email).then(result => {
        onSetError('email', result);
    })
});

getAccountList().then(accountList => {
    setAccountOptions(accountList, params.id);
});

onSubmitForm('transfer-button', () => {
    const date = `${transfer.day}/${transfer.month}/${transfer.year}`;
    transfer = {
        ...transfer,
        date:date,
    };
    formValidations.validateForm(transfer).then(result => {
        onSetFormErrors(result);
        if(result.succeeded) {
            console.log(result.succeeded);
            console.log(transfer);
            insertTransfer(transfer);
        }
    });
});