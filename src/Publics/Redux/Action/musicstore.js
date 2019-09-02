import Axios from 'axios';

export const getCategory = () =>{
    return{
        type : 'GET_CATEGORY',
        payload: Axios.get('http://localhost:4000/anekamusik')
    }
}

export const getBranch= () => {
    return {
        type: 'GET_BRANCH',
        payload: Axios.get('http://localhost:4000/anekamusik/branch')
    }
}

export const getProducts = () =>{
    return{
        type: 'GET_PRODUCTS',
        payload: Axios.get(`http://localhost:4000/anekamusik/products`)
    }
}


export const postCategory = (data) =>{
    return{
        type : 'POST_CATEGORY',
        payload: Axios.post('http://localhost:4000/anekamusik', data)
    }
}

export const postProducts = (data) => {
    return {
        type: 'POST_PRODUCTS',
        payload: Axios.post('http://localhost:4000/anekamusik/products', data)
    }
}

export const updateProducts = (id) => {
    return {
        type: 'UPDATE_PRODUCTS',
        payload: Axios.patch(`http://localhost:4000/anekamusik/products/${id}`)
    }
}

export const deleteProducts = (id) => {
    return {
        type: 'DELETE_PRODUCTS',
        payload: Axios.delete(`http://localhost:4000/anekamusik/products/${id}`)
    }
}