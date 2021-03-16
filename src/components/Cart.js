import { connect } from 'react-redux'
import ItemInCart from './ItemInCart'
import { withRouter } from 'react-router-dom'


const Cart = (props) => {

    const checkout = () => {
        props.history.push('/checkout')
    }

    return (
        <div className='cart'>
            <h2>Cart</h2>
            <div className='cartItems'>
                {props.cart.map((cut) => {
                    return <ItemInCart key={cut.cut_id} cut={cut} />
                })}
            </div>
            <button className='checkoutButton' onClick={checkout} >Checkout</button>
        </div>
    )

}

const mapStateToProps = (state) => {
    return { cart: state.cart.cart }
}

export default withRouter(connect(mapStateToProps)(Cart))