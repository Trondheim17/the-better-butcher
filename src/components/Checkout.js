import { connect } from 'react-redux'
import { useState } from 'react'
import ReviewCart from './ReviewCart'
import BillingInfo from './BillingInfo'
import { withRouter } from 'react-router-dom'


const Checkout = (props) => {

    const [step, setStep] = useState(1)

    const inc = () => {
        setStep(step + 1)
    }

    const dec = () => {
        setStep(step - 1)
    }

    const cancel = () => {
        console.log(props)
        props.history.push('/cart')
    }

    return (
        <div>
            {step === 1 && <ReviewCart />}
            {step === 2 && <BillingInfo />}
            {step !== 1 ? <button onClick={dec}>{'< Back'}</button> : <button onClick={cancel}>Cancel</button>}
            <button onClick={inc}>{'Next >'}</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { ...state }
}

export default withRouter(connect(mapStateToProps)(Checkout))