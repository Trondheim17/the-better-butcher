import { useState } from 'react'

const BillingInfo = () => {
    const [shipToAddress, setShipToAddress] = useState('')
    const [shipToCity, setShipToCity] = useState('')
    const [shipToState, setShipToState] = useState('')
    const [shipToZip, setShipToZip] = useState('')

    const [billToAddress, setBillToAddress] = useState('')
    const [billToCity, setBillToCity] = useState('')
    const [billToState, setBillToState] = useState('')
    const [billToZip, setBillToZip] = useState('')

    const [isChecked, setIsChecked] = useState(false)

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
            <div>
                <h3>Ship to Street Address</h3>
                <input className='input' value={shipToAddress} onChange={e => setShipToAddress(e.target.value)} />
                <h3>Ship to City</h3>
                <input className='input' value={shipToCity} onChange={e => setShipToCity(e.target.value)} />
                <div>
                    <label htmlFor='State'>Select Ship to State</label>
                    <select name='State' id='State' value={shipToState} onChange={e => setShipToState(e.target.value)}>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>
                <h3>Ship to Zip Code</h3>
                <input className='input' value={shipToZip} onChange={e => setShipToZip(e.target.value)} />
            </div>

            <input type='checkbox' checked={isChecked} onChange={!isChecked ? check : uncheck} />
            <div>
                <h3>Bill to Street Address</h3>
                <input className='input' value={billToAddress} onChange={e => setBillToAddress(e.target.value)} disabled={isChecked && true} />
                <h3>Bill to City</h3>
                <input className='input' value={billToCity} onChange={e => setBillToCity(e.target.value)} disabled={isChecked && true} />
                <div>
                    <label htmlFor='State'>Select Bill to State</label>
                    <select name='State' id='State' value={billToState} onChange={e => setBillToState(e.target.value)} disabled={isChecked && true}>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>
                <h3>Billing Zip Code</h3>
                <input className='input' value={billToZip} onChange={e => setBillToZip(e.target.value)} disabled={isChecked && true} />
            </div>
        </div>
    )
}

export default BillingInfo