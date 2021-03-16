import { Elements } from '@stripe/react-stripe-js';
import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import { connect } from 'react-redux'
import ItemInReview from './ItemInReview'
require('dotenv').config()

const CreditCardInfo = (props) => {

    const [stripePromise, setStripePromise] = useState(() => loadStripe(process.env.STRIPE_KEY))
    console.log(process.env.STRIPE_KEY)

    return (
        <div className='orderReview'>
            <h2>Review Order Info</h2>
            <h3 className='addressHeader'>Ship To Address:</h3>
            <div className='addressBlock'>
                <div className='addressBlockLine'>{`${props.user.user.firstName} ${props.user.user.lastName}`}</div>
                <div className='addressBlockLine'>{`${props.shipToAddress}`}</div>
                <div className='addressBlockLine'>{`${props.shipToCity}, ${props.shipToState} ${props.shipToZip}`}</div>
            </div>
            <h3 className='addressHeader'>Bill To Address:</h3>
            <div className='addressBlock'>
                <div className='addressBlockLine'>{`${props.user.user.firstName} ${props.user.user.lastName}`}</div>
                <div className='addressBlockLine'>{`${props.billToAddress}`}</div>
                <div className='addressBlockLine'>{`${props.billToCity}, ${props.billToState} ${props.billToZip}`}</div>

            </div>
            <div className='cartItems'>
                {props.cart.cart.map((cut) => {
                    return <ItemInReview key={cut.cut_id} cut={cut} />
                })}
            </div>
            <h2>Enter Credit Card Information</h2>
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
            </Elements>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { ...state }
}

export default connect(mapStateToProps)(CreditCardInfo)