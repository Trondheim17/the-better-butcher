import { connect } from 'react-redux'
import { setCart } from '../redux/cartReducer'
import { useState } from 'react'
import axios from 'axios'
import DeleteItemButton from './DeleteItemButton'

const ItemInCart = (props) => {
    const { cut_name, cut_image, price_per_pound, qty } = props.cut
    const [cartQuantity, setCartQuantity] = useState(qty)

    const inc = () => {
        const newQty = cartQuantity + 1
        return setCartQuantity(newQty)
    }

    const dec = () => {
        if (cartQuantity === 1) {
            return setCartQuantity(1)
        } else {
            const newQty = cartQuantity - 1
            return setCartQuantity(newQty)
        }
    }

    const removeFromCart = () => {
        axios.delete(`/cart/remove_from_cart?cart_id=${props.cart.cart[0].cart_id}&cut_id=${props.cut.cut_id}`)
            .then(async (res) => {
                const updatedCart = await axios.get('/cart/get_cart')
                props.setCart(updatedCart.data)
            })
    }
    return (
        <div className='item'>
            <div className='itemImage' style={{ backgroundImage: `url('http://${cut_image}')` }}></div>
            <div>{`${cut_name}`}</div>
            <p>{`$ ${price_per_pound}/lb`}</p>
            <div className='itemButtons'>
                <button className='plusMinus' onClick={dec}>-</button>
                <input className='qty' value={cartQuantity} onChange={e => setCartQuantity(e.target.value)} />
                <button className='plusMinus' onClick={inc}>+</button>
            </div>
            <DeleteItemButton onClick={removeFromCart} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return { ...state }
}

export default connect(mapStateToProps, { setCart })(ItemInCart)