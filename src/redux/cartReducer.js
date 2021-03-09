
const initialState = {
    items: []
}

// const ADD_TO_CART = 'ADD_TO_CART'
// const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
// const EDIT_ITEM_QTY = 'EDIT_ITEM_QTY'
const SET_CART = 'SET_CART'

export function setCart(cart) {
    return {
        type: SET_CART,
        payload: cart
    }
}

// export function addToCart(item) {
//     return {
//         type: ADD_TO_CART,
//         payload: item
//     }
// }

// export function removeFromCart(item) {
//     return {
//         type: REMOVE_FROM_CART,
//         payload: item
//     }
// }

// export function editQty(item, str) {
//     return {
//         type: EDIT_ITEM_QTY,
//         payload: { item, str }
//     }
// }

export default function cartReducer(state = initialState, {type, payload}) {
    switch (type) {
        // case ADD_TO_CART:
        //     return [...state, payload]
        // case REMOVE_FROM_CART:
        //     const index = state.findIndex(item => item.cut_id === payload.cut_id)
        //     const newState = [...state]
        //     newState.splice(index, 1)
        //     return [...newState]
        // case EDIT_ITEM_QTY:
        //     if (action.payload.str === 'increment') {
        //         action.payload.item.qty++
        //     } else if (action.payload.str === 'decrament') {
        //         action.payload.item.qty--
        //     }
            // return 

        case SET_CART:
            return {...state, cart:payload}
        default:
            return state
    }
}