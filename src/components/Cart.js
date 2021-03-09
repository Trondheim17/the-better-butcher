import { connect } from 'react-redux'
import axios from 'axios'
import { useEffect } from 'react'
import { setCart } from '../redux/cartReducer'
import Item from './Item'


const Cart = (props) => {

    useEffect(() => {
        axios.get('/cart/get_cart')
            .then(res =>
                setCart(res.data)
            )
    }, [])


    return (
        <div className='cart'>
            <h2>Cart</h2>
            <div className='cartItems'>
                {props.items.map((item) => {
                    return <Item key={item.cut_id} item={item} />
                })}
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return { items: state.cart.items }
}

export default connect(mapStateToProps, { setCart })(Cart)