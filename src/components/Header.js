import React from 'react'
import Nav from './Nav'
import Logo from './Logo'
import {connect} from 'react-redux'


const Header = ({user}) => {
    console.log(user)
    return (
        <div className='Header' >
            <Logo />
            <div>
                <Nav />
            </div>
            <div>
                { user.firstName && `Welcome, ${user.firstName} ${user.lastName}`}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {user: state.user.user}
}

export default connect(mapStateToProps)(Header)