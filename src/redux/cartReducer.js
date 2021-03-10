
const initialState = {
    cart: []
}

const SET_CART = 'SET_CART'

export function setCart(cart) {
    return {
        type: SET_CART,
        payload: cart
    }
}

export default function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_CART:
            return { ...state, cart: payload }
        default:
            return state
    }
}