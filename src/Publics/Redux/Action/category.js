import Axios from 'axios';

export const getCategory = () => {
    return {
        type: 'GET_CATEGORY',
        payload: Axios.get('http://localhost:4000/anekamusik/category')
    }
}

export const postCategory = (data) => {
    return {
        type: 'POST_CATEGORY',
        payload: Axios.post('http://localhost:4000/anekamusik/category', data)
    }
}