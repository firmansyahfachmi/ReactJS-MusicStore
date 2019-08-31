import Axios from 'axios';

export const getCategory = () =>{
    return{
        type : 'GET_CATEGORY',
        payload: Axios.get('http://localhost:4000/anekamusik')
    }
}

export const getProducts = () =>{
    return{
        type: 'GET_PRODUCTS',
        payload: Axios.get(`http://localhost:4000/anekamusik/products`)
    }
}

export const addCategory = (data) =>{
    return{
        type : 'POST_CATEGORY',
        payload: Axios.post('http://localhost:4000/anekamusik', data)
    }
}

export const addProducts = (data) => {
    return {
        type: 'POST_PRODUCTS',
        payload: Axios.post('http://localhost:4000/anekamusik/products', data)
    }
}