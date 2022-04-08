import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/account-list`;
const urlTransfer = `${process.env.BASE_API_URL}/transfer`;

export const getAccountList = () => Axios.get(url).then(response => {
    return response.data;
});

export const insertTransfer = transfer => Axios.post(`${urlTransfer}/${transfer.id}`, transfer).then(response => {
    return response.data;
});