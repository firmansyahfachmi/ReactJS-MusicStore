const initialState = {
    cartData: [],
    total: 0,
    isLoading: false,
    isFulfilled: false,
    isRejected: false,

};

const cart = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_CART_PENDING':
            return {
                ...state,
                isLoading: true,
                    isRejected: false,
                    isFulfilled: false,
            };
        case 'GET_CART_REJECTED':
            return {
                ...state,
                isLoading: false,
                    isRejected: true,
            };
        case 'GET_CART_FULFILLED':
            return {
                ...state,
                isLoading: false,
                    isFulfilled: true,
                    cartData: action.payload.data.data,
            };
        case 'POST_CART_PENDING':
            return {
                ...state,
                isLoading: true,
                    isRejected: false,
                    isFulfilled: false,
            };
        case 'POST_CART_REJECTED':
            return {
                ...state,
                isLoading: false,
                    isRejected: true,
            };
        case 'POST_CART_FULFILLED':
            let newTotal = state.total + action.payload.data.data.price

            state.cartData.push(action.payload.data.data)
            return {
                ...state,
                isLoading: false,
                    isFulfilled: true,
                    cartData: [...state.cartData],
                    total: newTotal
            };
        case 'DELETE_CART_PENDING':
            return {
                ...state,
                isLoading: true,
                    isRejected: false,
                    isFulfilled: false,
            };
        case 'DELETE_CART_REJECTED':
            return {
                ...state,
                isLoading: false,
                    isRejected: true,
            };
        case 'DELETE_CART_FULFILLED':
            let new_items = state.cartData.filter(cart => {
                return Number(cart.id) !== Number(action.payload.data.data)

            })

            let find = state.cartData.filter(cart => {
                return Number(cart.id) === Number(action.payload.data.data)
            })

            let min = Number(state.total) - Number(find[0].price)

            return {
                ...state,
                isLoading: false,
                    isFulfilled: true,
                    cartData: new_items,
                    total: min
            };
        default:
            return state;
    }
}

export default cart;