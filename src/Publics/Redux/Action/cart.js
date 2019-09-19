import Axios from 'axios';

export const getCart = (id) => {
    return {
        type: 'GET_CART',
        payload: Axios.get(`http://localhost:4000/anekamusik/cart/${id}`, {
            headers: {
                authorization: 'musicStoreHeaders',
                token: localStorage.getItem('token'),
                user: localStorage.getItem('userId')
            }
        })
    }
}

export const addCart = (data) => {
    return {
        type: 'POST_CART',
        payload: Axios.post(`http://localhost:4000/anekamusik/cart/${localStorage.getItem('userId')}`, data, {
            headers: {
                authorization: 'musicStoreHeaders',
                token: localStorage.getItem('token'),
                user: localStorage.getItem('userId')
            }
        })
    }
}

export const editCart = (data) => {
    return {
        type: 'PATCH_CART',
        payload: Axios.patch(`http://localhost:4000/anekamusik/cart/${localStorage.getItem('userId')}/${data.id}`, data, {
            headers: {
                authorization: 'musicStoreHeaders',
                token: localStorage.getItem('token'),
                user: localStorage.getItem('userId')
            }
        })
    }
}

export const deleteCart = (uid, id) => {
    return {
        type: 'DELETE_CART',
        payload: Axios.delete(`http://localhost:4000/anekamusik/cart/${uid}/${id}`, {
            headers: {
                authorization: 'musicStoreHeaders',
                token: localStorage.getItem('token'),
                user: localStorage.getItem('userId')
            }
        })
    }
}