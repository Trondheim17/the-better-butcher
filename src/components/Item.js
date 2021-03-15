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
            <div className='itemLabel'>
                <div className='cutName'>{`${cut_name}`}</div>
                <div className='price'>{`$ ${price_per_pound}/lb`}</div>
            </div>
            <div className='itemButtons'>
                <div className='plusMinusRow' >
                    <svg className='plusMinus' onClick={inc} color='#9C0000' aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus-square" class="svg-inline--fa fa-plus-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 512"><path fill="currentColor" d="M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>
                    <svg className='plusMinus' onClick={dec} color='#9C0000' aria-hidden="true" focusable="false" data-prefix="far" data-icon="minus-square" class="svg-inline--fa fa-minus-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 512"><path fill="currentColor" d="M108 284c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v32c0 6.6-5.4 12-12 12H108zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>
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
