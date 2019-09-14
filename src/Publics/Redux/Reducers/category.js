const initialState = {
    categoryData: [],
    productsData: [],
    detailData: [],
    productsTable: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

const category = (state = initialState, action) => {
    switch (action.type) {

        //GET CATEGORY///////////////////////////////////////////////////////////////////////////////
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
                    categoryData: action.payload.data.data,
            };

            //POST CATEGORY///////////////////////////////////////////////////////////////////////////////
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
            state.categoryData.push(action.payload.data.data)
            return {
                ...state,
                isLoading: false,
                    isFulfilled: true,
                    categoryData: [...state.categoryData]
            };

        default:
            return state;
    }
};

export default category;