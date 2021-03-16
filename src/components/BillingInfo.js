const BillingInfo = (props) => {


    return (
        <div className='billingInfo'>
            <h1>Billing Info</h1>
            <div>
                <h3>Ship to Street Address</h3>
                <input required className='input billingInput' value={props.shipToAddress} onChange={e => props.setShipToAddress(e.target.value)}  />
                <h3>Ship to City</h3>
                <input required className='input billingInput' value={props.shipToCity} onChange={e => props.setShipToCity(e.target.value)} />
                <div className='stateSelector'>
                    <label className='stateSelectInfo' htmlFor='State'>Select Ship to State</label>
                    <select className='selectStateDropDown' name='State' id='State' value={props.shipToState} onChange={e => props.setShipToState(e.target.value)}>
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
                <input required className='input billingInput' value={props.shipToZip} onChange={e => props.setShipToZip(e.target.value)} />
            </div>
            <div className='checkboxInfo'>
                <input type='checkbox' checked={props.isChecked} onChange={!props.isChecked ? props.check : props.uncheck} />
                <div className='checkboxDescription'>Check if Bill To and Ship To are the same</div>
            </div>
            <div>
                <h3>Bill to Street Address</h3>
                <input required className='input billingInput' value={props.billToAddress} onChange={e => props.setBillToAddress(e.target.value)} disabled={props.isChecked && true} />
                <h3>Bill to City</h3>
                <input required className='input billingInput' value={props.billToCity} onChange={e => props.setBillToCity(e.target.value)} disabled={props.isChecked && true} />
                <div className='stateSelector'>
                    <label className='stateSelectInfo' htmlFor='State'>Select Bill to State</label>
                    <select className='selectStateDropDown' name='State' id='State' value={props.billToState} onChange={e => props.setBillToState(e.target.value)} disabled={props.isChecked && true}>
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
                <input required className='input billingInput' value={props.billToZip} onChange={e => props.setBillToZip(e.target.value)} disabled={props.isChecked && true} />
            </div>
        </div>
    )
}

export default BillingInfo