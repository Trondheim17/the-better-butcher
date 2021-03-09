const initialState = {
    items: [],
    cartItems: []
}

const SET_ITEMS = 'SET_ITEMS'

export function setItems(items) {
    return {
        type: SET_ITEMS,
        payload: items
    }
}

export default function itemReducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_ITEMS:
            return {...state, items: payload}
        default:
            return state
    }
}