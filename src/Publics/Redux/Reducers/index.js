import {
    combineReducers
} from 'redux';
import branch from './branch.js'
import category from './category.js'
import products from './products.js'
import user from './user.js'

const rootReducer = combineReducers({
    branch,
    category,
    products,
    user
})

export default rootReducer;