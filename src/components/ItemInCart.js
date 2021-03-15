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
        setCartQuantity(newQty)
        axios.put('/cart/edit_cart', { qty: newQty, cart_id: props.cart.cart[0].cart_id, cut_id: props.cut.cut_id })
            .then(async (res) => {
                const updatedCart = await axios.get('/cart/get_cart')
                props.setCart(updatedCart.data)
            })
    }

    const dec = () => {
        if (cartQuantity === 1) {
            axios.delete(`/cart/remove_from_cart?cart_id=${props.cart.cart[0].cart_id}&cut_id=${props.cut.cut_id}`)
                .then(async (res) => {
                    const updatedCart = await axios.get('/cart/get_cart')
                    props.setCart(updatedCart.data)
                })
        } else {
            const newQty = cartQuantity - 1
            setCartQuantity(newQty)
            axios.put('/cart/edit_cart', { qty: newQty, cart_id: props.cart.cart[0].cart_id, cut_id: props.cut.cut_id })
                .then(async (res) => {
                    const updatedCart = await axios.get('/cart/get_cart')
                    props.setCart(updatedCart.data)
                })
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
            <div className='itemLabel'>
                <div className='cutName'>{`${cut_name}`}</div>
                <div className='price'>{`$ ${price_per_pound}/lb`}</div>
            </div>
            <div className='itemButtons'>
                <div className='plusMinusRow' >
                    <svg className='plusMinus' onClick={inc} color='#9C0000' aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus-square" className="svg-inline--fa fa-plus-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 512"><path fill="currentColor" d="M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>
                    <svg className='plusMinus' onClick={dec} color='#9C0000' aria-hidden="true" focusable="false" data-prefix="far" data-icon="minus-square" className="svg-inline--fa fa-minus-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 512"><path fill="currentColor" d="M108 284c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v32c0 6.6-5.4 12-12 12H108zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>
                </div>
                <input className='qty' value={cartQuantity} onChange={e => setCartQuantity(e.target.value)} />
            </div>
            <DeleteItemButton onClick={removeFromCart} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return { ...state }
}

export default connect(mapStateToProps, { setCart })(ItemInCart)