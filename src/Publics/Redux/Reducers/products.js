const initialState = {
    productsData: [],
    detailData: [],
    productsTable: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

const products = (state = initialState, action) => {
    switch (action.type) {

        //GET PRODUCTS///////////////////////////////////////////////////////////////////////////////
        case 'GET_PRODUCTS_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false,
            };
        case 'GET_PRODUCTS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_PRODUCTS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                productsData: action.payload.data.data,

            };

        //GET PRODUCTS TABLE///////////////////////////////////////////////////////////////////////////////
        case 'GET_PRODUCTS_TABLE_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false,
            };
        case 'GET_PRODUCTS_TABLE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_PRODUCTS_TABLE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                productsTable: action.payload.data.data,

            };

        //GET PRODUCTS DETAIL///////////////////////////////////////////////////////////////////////////////
        case 'GET_PRODUCTS_DETAIL_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false,
            };
        case 'GET_PRODUCTS_DETAIL_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_PRODUCTS_DETAIL_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                detailData: action.payload.data.data
            };
        //POST PRODUCTS///////////////////////////////////////////////////////////////////////////////
        case 'POST_PRODUCTS_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false,
            };
        case 'POST_PRODUCTS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'POST_PRODUCTS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
            };

        //UPDATE PRODUCTS///////////////////////////////////////////////////////////////////////////////
        case 'UPDATE_PRODUCTS_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false,
            };
        case 'UPDATE_PRODUCTS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'UPDATE_PRODUCTS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
            };

        //DELETE PRODUCTS///////////////////////////////////////////////////////////////////////////////
        case 'DELETE_PRODUCTS_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false,
            };
        case 'DELETE_PRODUCTS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'DELETE_PRODUCTS_FULFILLED':
            let filter = state.productsData.findIndex(products => {
                return products.id === action.payload.data.data.id

            })
            let deleted = state.productsData.splice(filter, 1);

            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                productsData: deleted

            };
        default:
            return state;
    }
}

export default products;