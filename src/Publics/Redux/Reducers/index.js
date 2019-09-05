import { combineReducers } from 'redux';
import branch from './branch.js'
import category from './category.js'
import products from './products.js'

const rootReducer = combineReducers({
    branch,
    category,
    products
})

export default rootReducer;