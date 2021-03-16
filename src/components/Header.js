import React from 'react'
import Nav from './Nav'
import Logo from './Logo'
import { connect } from 'react-redux'


const Header = () => {
    return (
        <div className='Header sticky' >
            <Logo />
            <div className='nav'>
                <Nav />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { user: state.user.user }
}

export default connect(mapStateToProps)(Header)