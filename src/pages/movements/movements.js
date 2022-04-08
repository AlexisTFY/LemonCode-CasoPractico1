import { getMovements, getMovement } from './movements.api';
import { addMovementRows } from './movements.helpers';
import { mapMovementsFromApiToVm } from './movements.mappers'
import { history } from '../../core/router';

const params = history.getParams();

const isMovementsAccountMode = Boolean(params.id);

if(isMovementsAccountMode) {
    getMovement(params.id).then(movements => {
        const viewModelMovements = mapMovementsFromApiToVm(movements);
        addMovementRows(viewModelMovements);
    });
} else {
    getMovements().then(movements => {
        const viewModelMovements = mapMovementsFromApiToVm(movements);
        addMovementRows(viewModelMovements);
    });
}

