import { connect } from 'react-redux'
// import axios from 'axios'
// import { useEffect } from 'react'
import { setCart } from '../redux/cartReducer'
import ItemInCart from './ItemInCart'


const Cart = (props) => {

    // useEffect(() => {
    //     axios.get('/cart/get_cart')
    //         .then(res =>
    //             setCart(res.data)
    //         )
    // }, [])

    console.log(props)

    return (
        <div className='cart'>
            <h2>Cart</h2>
            <div className='cartItems'>
                {props.cart.map((cut) => {
                    return <ItemInCart key={cut.cut_id} cut={cut} />
                })}
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return { cart: state.cart.cart }
}

export default connect(mapStateToProps, { setCart })(Cart)