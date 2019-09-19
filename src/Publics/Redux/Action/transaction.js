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

export const getTransactionAdmin = () => {
    return {
        type: 'GET_TRANSACTION_ADMIN',
        payload: Axios.get(`http://localhost:4000/anekamusik/transaction/`, {
            headers: {
                authorization: 'musicStoreHeaders',
                token: localStorage.getItem('token'),
                user: localStorage.getItem('userId')
            }
        })
    }
}

export const addTransaction = (data) => {
    return {
        type: 'POST_TRANSACTION',
        payload: Axios.post(`http://localhost:4000/anekamusik/transaction/${localStorage.getItem('userId')}`, data, {
            headers: {
                authorization: 'musicStoreHeaders',
                token: localStorage.getItem('token'),
                user: localStorage.getItem('userId')
            }
        })
    }
}