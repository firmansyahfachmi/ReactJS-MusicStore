import Axios from 'axios';

export const getWishlist = (id) => {
    return {
        type: 'GET_WISHLIST',
        payload: Axios.get(`http://localhost:4000/anekamusik/wishlist/${id}`, {
            headers: {
                authorization: 'musicStoreHeaders',
                token: localStorage.getItem('token'),
                user: localStorage.getItem('userId')
            }
        })
    }
}

export const addWishlist = (data, id) => {
    return {
        type: 'POST_WISHLIST',
        payload: Axios.post(`http://localhost:4000/anekamusik/wishlist/${id}`, data, {
            headers: {
                authorization: 'musicStoreHeaders',
                token: localStorage.getItem('token'),
                user: localStorage.getItem('userId')
            }
        })
    }
}

export const deleteWishlist = (uid, id) => {
    return {
        type: 'DELETE_WISHLIST',
        payload: Axios.delete(`http://localhost:4000/anekamusik/wishlist/${uid}/${id}`, {
            headers: {
                authorization: 'musicStoreHeaders',
                token: localStorage.getItem('token'),
                user: localStorage.getItem('userId')
            }
        })
    }
}