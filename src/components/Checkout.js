import { connect } from 'react-redux'
import { useState } from 'react'
import ReviewCart from './ReviewCart'
import BillingInfo from './BillingInfo'
import CreditCardInfo from './CreditCardInfo'
import { withRouter } from 'react-router-dom'
import { getUser } from '../redux/userReducer'
import axios from 'axios'



const Checkout = (props) => {

    const [shipToAddress, setShipToAddress] = useState('')
    const [shipToCity, setShipToCity] = useState('')
    const [shipToState, setShipToState] = useState('')
    const [shipToZip, setShipToZip] = useState('')

    const [billToAddress, setBillToAddress] = useState('')
    const [billToCity, setBillToCity] = useState('')
    const [billToState, setBillToState] = useState('')
    const [billToZip, setBillToZip] = useState('')

    const [isChecked, setIsChecked] = useState(false)

    const [step, setStep] = useState(1)

    const inc = () => {
        switch (step) {
            case 2:
                console.log(props.user)
                axios.post('/auth/set_address', { shipToAddress, shipToCity, shipToState, shipToZip, billToAddress, billToCity, billToState, billToZip, user_id: props.user.user.userId })
                    .then(res => props.getUser(res.data))
                setStep(step + 1)
                break
            default:
                return setStep(step + 1)
        }
    }

    const dec = () => {
        setStep(step - 1)
    }

    const cancel = () => {
        props.history.push('/cart')
    }

    const check = () => {
        setIsChecked(true)
        setBillToAddress(shipToAddress)
        setBillToCity(shipToCity)
        setBillToState(shipToState)
        setBillToZip(shipToZip)
    }

    const uncheck = () => {
        setIsChecked(false)
        setBillToAddress('')
        setBillToCity('')
        setBillToState('')
        setBillToZip('')
    }

    const checkout = () => {
        axios.post('/create-checkout-session')
            .then(
                axios.put(`/cart/checkout_cart`,{cart_id: props.cart.cart.cartId, user_id: props.user.user.userId}),
                props.history.push('/')
                )
                .catch(err => console.log(err))
    }

    return (
        <div className='checkoutButtonRow'>
            {step === 1 && <ReviewCart />}
            {step === 2 && <BillingInfo
                shipToAddress={shipToAddress}
                setShipToAddress={setShipToAddress}
                shipToCity={shipToCity}
                setShipToCity={setShipToCity}
                shipToState={shipToState}
                setShipToState={setShipToState}
                shipToZip={shipToZip}
                setShipToZip={setShipToZip}
                billToAddress={billToAddress}
                setBillToAddress={setBillToAddress}
                billToCity={billToCity}
                setBillToCity={setBillToCity}
                billToState={billToState}
                setBillToState={setBillToState}
                billToZip={billToZip}
                setBillToZip={setBillToZip}
                isChecked={isChecked}
                setIsChecked={setIsChecked}
                check={check}
                uncheck={uncheck}
            />}
            {step === 3 && <CreditCardInfo
                shipToAddress={shipToAddress}
                setShipToAddress={setShipToAddress}
                shipToCity={shipToCity}
                setShipToCity={setShipToCity}
                shipToState={shipToState}
                setShipToState={setShipToState}
                shipToZip={shipToZip}
                setShipToZip={setShipToZip}
                billToAddress={billToAddress}
                setBillToAddress={setBillToAddress}
                billToCity={billToCity}
                setBillToCity={setBillToCity}
                billToState={billToState}
                setBillToState={setBillToState}
                billToZip={billToZip}
                setBillToZip={setBillToZip}
                isChecked={isChecked}
                setIsChecked={setIsChecked}
                check={check}
                uncheck={uncheck}
            />}
            <div>
                {step !== 1 ? <button className='checkoutButton' onClick={dec}>{'< Back'}</button> : <button className='checkoutButton' onClick={cancel}>Cancel</button>}
                {step !== 3 ? <button className='checkoutButton' onClick={inc}>{'Next >'}</button> : <button className='checkoutButton' onClick={checkout}>Place Order</button>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { ...state }
}

export default withRouter(connect(mapStateToProps, { getUser })(Checkout))