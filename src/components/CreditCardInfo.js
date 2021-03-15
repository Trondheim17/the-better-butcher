// import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// import { CardElement } from '@stripe/react-stripe-js';
import { connect } from 'react-redux'
import ItemInReview from './ItemInReview'

const CreditCardInfo = (props) => {
    const stripePromise = loadStripe('pk_test_51ITFSzHmJgBX8T7ugcThrwJ3ZZJUN9FtCswilVA4cG4EWtktMuExNQtQGNA8HE7v2Tt62s3ULERj8FftfJIbOLkh00gwkI0lMF');
    return (
        <div className='orderReview'>
                <h2>Review Order Info</h2>
                <div className='cartItems'>
                    {props.cart.cart.map((cut) => {
                        return <ItemInReview key={cut.cut_id} cut={cut} />
                    })}
                </div>
                <div>Ship To Address:</div>
                <div>
                    <div>{`${props.user.user.firstName} ${props.user.user.lastName}`}</div>
                    <div>{`${props.shipToAddress}`}</div>
                    <div>{`${props.shipToCity}, ${props.shipToState} ${props.shipToZip}`}</div>
                </div>
                <div>Bill To Address:</div>
                <div>
                    <div>{`${props.user.user.first_name} ${props.user.user.last_name}`}</div>
                    <div>{`${props.billToAddress}`}</div>
                    <div>{`${props.billToCity}, ${props.billToState} ${props.billToZip}`}</div>

                </div>
            {/* <h2>Enter Credit Card Information</h2>
            <Elements stripe={stripePromise}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
            </Elements> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { ...state }
}

export default connect(mapStateToProps)(CreditCardInfo)