import Axios from 'axios';

export const getTransaction = (uid) => {
    return {
        type: 'GET_TRANSACTION',
        payload: Axios.get(`http://localhost:4000/anekamusik/transaction/${uid}`, {
            headers: {
                authorization: 'musicStoreHeaders',
                token: localStorage.getItem('token'),
                user: localStorage.getItem('userId')
            }
        })
    }
}