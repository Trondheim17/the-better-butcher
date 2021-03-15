import React, { useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import Button from './Button'
import { loginUser } from '../redux/userReducer'
import { withRouter } from 'react-router-dom'

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

    const register = () => {
        axios.post(`/auth/register`, { email: registerEmail, password: registerPassword, firstName, lastName })
            .then(res => {
                props.loginUser(res.data)
                props.history.push('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='loginMain'>
            <div className='formContainer'>
                <h1>Log In</h1>
                <div className='form'>
                    <div>
                        <h3>Email</h3>
                        <input className='input' value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <h3>Password</h3>
                        <input className='input pass' type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <Button name='Login' onClick={login} />
                </div>
            </div>
            <h3 className='or'> - or - </h3>
            <div className='formContainer'>
                <h2>Register</h2>
                <div className='form'>
                    <div>
                        <h3>First Name</h3>
                        <input className='input' value={firstName} onChange={e => setFirstName(e.target.value)} />
                    </div>
                    <div>
                        <h3>Last Name</h3>
                        <input className='input' value={lastName} onChange={e => setLastName(e.target.value)} />
                    </div>
                    <div>
                        <h3>Email</h3>
                        <input className='input' value={registerEmail} onChange={e => setRegisterEmail(e.target.value)} />
                    </div>
                    <div>
                        <h3>Password</h3>
                        <input className='input pass' type='password' value={registerPassword} onChange={e => setRegisterPassword(e.target.value)} />
                    </div>
                    <Button name='Register' onClick={register} />
                </div>
            </div>
        </div>
    )
}

export default withRouter(connect(null, { loginUser })(Auth))