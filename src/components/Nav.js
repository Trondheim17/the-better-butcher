import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/thebutchershop'}>Shop</Link>
            <Link to={'/themeat'}>About the Cow</Link>
        </div>
    )
}

export default Nav