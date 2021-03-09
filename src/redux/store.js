import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import itemReducer from '../redux/itemReducer'
import cartReducer from '../redux/cartReducer'
import userReducer from '../redux/userReducer'

const rootReducer = combineReducers({
    item: itemReducer,
    cart: cartReducer,
    user: userReducer
})

const composition = compose(applyMiddleware(promiseMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default createStore(rootReducer, composition)
