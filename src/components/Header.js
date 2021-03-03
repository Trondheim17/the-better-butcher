import React from 'react'
import Nav from './Nav'
import Logo from './Logo'


const Header = () => {
    return (
        <div className='Header' >
            <Logo />
            <div>
                <Nav />
            </div>
        </div>
    )
}

export default Header