import React, { useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import Button from './Button'
import { loginUser } from '../redux/userReducer'

const Auth = (props) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        axios.post('/auth/login', {userName, password} )
            .then(res => {
                props.loginUser(res.data)
                props.history.push(`/`)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <input value={userName} onChange={e => setUserName(e.target.value)} />
            <input value={password} onChange={e => setPassword(e.target.value)} />
            <Button name='Login' onClick={login}/>
        </div>
    )
}

export default connect(null, { loginUser })(Auth)