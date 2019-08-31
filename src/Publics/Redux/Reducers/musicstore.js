const initialState = {
    categoryData: [],
    productsData: [],
    detailData: [],
    categoryAdd: [],
    productsAdd: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

const storeMusic = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATEGORY_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false,
            };
        case 'GET_CATEGORY_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_CATEGORY_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                categoryData: action.payload.data,
            };
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
                productsData: action.payload.data,
                detailData: action.payload.data
            };
        case 'POST_CATEGORY_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false,
            };
        case 'POST_CATEGORY_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'POST_CATEGORY_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                categoryAdd: action.payload.data
            };
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
                productsAdd: action.payload.data
            };

        default:
            return state;
    }
};

export default storeMusic;