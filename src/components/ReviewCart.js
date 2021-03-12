import { connect } from 'react-redux'
import ItemInReview from './ItemInReview'


const ReviewCart = (props) => {

    console.log(props)

    return (
        <div className='reviewCart'>
            <h2>Review Cart</h2>
            <div className='cartItems'>
                {props.cart.map((cut) => {
                    return <ItemInReview key={cut.cut_id} cut={cut} />
                })}
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return { cart: state.cart.cart }
}

export default connect(mapStateToProps)(ReviewCart)