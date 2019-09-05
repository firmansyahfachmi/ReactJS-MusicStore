const initialState = {
    branchData: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

const branch = (state = initialState, action) => {
    switch (action.type) {
        //GET BRANCH///////////////////////////////////////////////////////////////////////////////
        case 'GET_BRANCH_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false,
            };
        case 'GET_BRANCH_REJECTED':
            return {
                ...state,
                isLoading: false,
                    isRejected: true,
            };
        case 'GET_BRANCH_FULFILLED':
            return {
                ...state,
                isLoading: false,
                    isFulfilled: true,
                    branchData: action.payload.data.data,
            };
        default:
            return state;
    }
}

export default branch;