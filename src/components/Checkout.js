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
                axios.post('/auth/set_address', { shipToAddress, shipToCity, shipToState, shipToZip, billToAddress, billToCity, billToState, billToZip })
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

    return (
        <div>
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
            {step === 3 && <CreditCardInfo />}
            {step !== 1 ? <button onClick={dec}>{'< Back'}</button> : <button onClick={cancel}>Cancel</button>}
            {step !== 4 ? <button onClick={inc}>{'Next >'}</button> : <button>Checkout</button>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { ...state }
}

export default withRouter(connect(mapStateToProps, { getUser })(Checkout))