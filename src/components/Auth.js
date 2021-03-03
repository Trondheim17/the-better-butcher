import React, { useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import Button from './Button'
import { loginUser } from '../redux/userReducer'

const Auth = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')

    const login = () => {
        axios.post('/auth/login', { email, password })
            .then(res => {
                props.loginUser(res.data)
                props.history.push(`/`)
            })
            .catch(err => {
                console.log(err)
            })
    }

    // const register = () => {
    //     axios.post(`/auth/register`, { fistName, lastName, email, password})
    //     .then(res => {
    //         props.
    //     })
    // }

    return (
        <div className='loginMain'>
            <h2>Log In</h2>
            <div>
                <input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                <input placeholder='Password' type='password' value={password} onChange={e => setPassword(e.target.value)} />
                <Button name='Login' onClick={login} />
            </div>
            <h3> - - or - -</h3>
            <h2>Register</h2>
            <div>
                <input placeholder='First Name' value={firstName} onChange={e => setFirstName(e.target.value)} />
                <input placeholder='Last Name' value={lastName} onChange={e => setLastName(e.target.value)} />
                <input placeholder='Email' value={registerEmail} onChange={e => setRegisterEmail(e.target.value)} />
                <input placeholder='Password' value={registerPassword} onChange={e => setRegisterPassword(e.target.value)} />
                <Button name='Register' onClick={login} />
            </div>
        </div>
    )
}

export default connect(null, { loginUser })(Auth)