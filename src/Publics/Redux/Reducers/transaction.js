const initialState = {
    transactionData: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

const transaction = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TRANSACTION_PENDING':
            return {
                ...state,
                isLoading: true,
                    isRejected: false,
                    isFulfilled: false,
            };
        case 'GET_TRANSACTION_REJECTED':
            return {
                ...state,
                isLoading: false,
                    isRejected: true,
            };
        case 'GET_TRANSACTION_FULFILLED':
            return {
                ...state,
                isLoading: false,
                    isFulfilled: true,
                    transactionData: action.payload.data.data,
            };
        case 'GET_TRANSACTION_ADMIN_PENDING':
            return {
                ...state,
                isLoading: true,
                    isRejected: false,
                    isFulfilled: false,
            };
        case 'GET_TRANSACTION_ADMIN_REJECTED':
            return {
                ...state,
                isLoading: false,
                    isRejected: true,
            };
        case 'GET_TRANSACTION_ADMIN_FULFILLED':
            return {
                ...state,
                isLoading: false,
                    isFulfilled: true,
                    transactionData: action.payload.data.data,
            };
        default:
            return state;
    }
}

export default transaction;