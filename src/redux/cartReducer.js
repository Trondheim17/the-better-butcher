
const initialState = {
    items: []
}

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const EDIT_ITEM_QTY = 'EDIT_ITEM_QTY'

export function addToCart(item) {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export function removeFromCart(item) {
    return {
        type: REMOVE_FROM_CART,
        payload: item
    }
}

export function editQty(item, ) {
    return {
        type: EDIT_ITEM_QTY,
        payload: {item, ''}
    }
}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload]
        case REMOVE_FROM_CART:
            const index = state.findIndex(item => item.item_id === action.payload.item_id)
            const newState = [...state]
            newState.splice(index,1)
            return [...newState]
        case EDIT_ITEM_QTY:
            
            return
        default:
            return state
    }
}