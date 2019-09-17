import Axios from 'axios';

export const getProducts = (category, search, page) => {
    let url = ``;
    if (search !== null && search !== undefined) {
        url = `http://localhost:4000/anekamusik/products/search/${search}?page=${page}`;
    } else {
        url = `http://localhost:4000/anekamusik/products/${category}?page=${page}`;
    }

    return {
        type: 'GET_PRODUCTS',
        payload: Axios.get(url)
    }
}

export const getProductsTable = () => {
    return {
        type: 'GET_PRODUCTS_TABLE',
        payload: Axios.get(`http://localhost:4000/anekamusik/products/`)
    }
}

export const getProductsDetail = (name) => {
    return {
        type: 'GET_PRODUCTS_DETAIL',
        payload: Axios.get(`http://localhost:4000/anekamusik/products/detail/${name}`, {
            headers: {
                authorization: 'musicStoreHeaders',
                token: localStorage.getItem('token'),
                user: localStorage.getItem('userId')
            }
        })
    }
}

export const postProducts = (data) => {
    return {
        type: 'POST_PRODUCTS',
        payload: Axios.post('http://localhost:4000/anekamusik/products', data)
    }
}

export const updateProducts = (id, data) => {
    return {
        type: 'UPDATE_PRODUCTS',
        payload: Axios.patch(`http://localhost:4000/anekamusik/products/${id}`, data)
    }
}

export const deleteProducts = (id) => {

    return {
        type: 'DELETE_PRODUCTS',
        payload: Axios.delete(`http://localhost:4000/anekamusik/products/${id}`)
    }
}