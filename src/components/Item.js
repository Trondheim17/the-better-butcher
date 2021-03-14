import React, { useState } from 'react'
import AddToCartButton from './AddToCartButton'
import { connect } from 'react-redux'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { setCart } from '../redux/cartReducer'

const Item = (props) => {
    const { cut_name, cut_image, price_per_pound } = props.cut
    const [quantity, setQuantity] = useState(1)

    const inc = () => {
        const newQty = quantity + 1
        return setQuantity(newQty)
    }

    const dec = () => {
        if (quantity === 1) {
            return setQuantity(1)
        } else {
            const newQty = quantity - 1
            return setQuantity(newQty)
        }
    }

    const addItem = () => {
        console.log(props)
        axios.post('/cart/add_to_cart', { cut_id: props.cut.cut_id, cart_id: props.cart.cart_id, qty: quantity })
            .then(async (res) => {
                const updatedCart = await axios.get('/cart/get_cart')
                setQuantity(1)
                props.setCart(updatedCart.data)
            })
            .catch(() => {
                props.history.push('/login')
            })
    }

    return (
        <div className='item'>
            <div className='itemImage' style={{ backgroundImage: `url('http://${cut_image}')` }}></div>
            <div>{`${cut_name}`}</div>
            <p>{`$ ${price_per_pound}/lb`}</p>
            <div className='itemButtons'>
                <div className='plusMinusRow' >
                    <button className='plusMinus' onClick={inc}>+</button>
                    <button className='plusMinus' onClick={dec}>-</button>
                </div>
                <input className='qty' value={quantity} onChange={e => setQuantity(e.target.value)} />
            </div>
            <AddToCartButton onClick={addItem} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return { ...state }
}

export default withRouter(connect(mapStateToProps, { setCart })(Item))
