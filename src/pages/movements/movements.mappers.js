export const mapMovementsFromApiToVm = (movements) => {
    return movements.map(movement => mapMovementFromApiToVm(movement));
}

const mapMovementFromApiToVm = (movement) => {
    return {
        ...movement,
        amount: `${movement.amount} €`,
        balance: `${movement.balance} €`,
        realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
        transaction: new Date(movement.transaction).toLocaleDateString()
    }
}