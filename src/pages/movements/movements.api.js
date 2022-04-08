import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`;

export const getMovements = () => Axios.get(url).then(({data}) => data);
export const getMovement = id => Axios.get(url,{params:{accountId: id}}).then(({data}) => data);

