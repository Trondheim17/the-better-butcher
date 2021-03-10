import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from './Button'
import MobileButton from './MobileButton'
import HamburgerMenu from './HamburgerMenu'
import axios from 'axios'
import { logoutUser } from '../redux/userReducer'

const Nav = (props) => {
    const [toggle, setToggle] = useState(false)

    function toggleMenu() {
        return setToggle(!toggle)
    }

    function logOut() {
        axios.post('/auth/logout')
            .then(() => props.logoutUser())
    }

    return (
        <React.Fragment>
            <div className='deskTopNav'>
                <Link to={'/'}>
                    <Button name='Home'></Button>
                </Link>
                <Link to={'/thebutchershop'}>
                    <Button name='Shop'></Button>
                </Link>
                {props.user.email && <Link to={'/cart'}>
                    <Button name='Cart'></Button>
                </Link>}
                {!props.user.email ? <Link to={'/login'}>
                    <Button name='Login'></Button>
                </Link> : <Button name='Log Out' onClick={logOut} />}
            </div>
            <div className='mobileNav'>
                <HamburgerMenu onClick={toggleMenu} />
                {toggle &&
                    <div>
                        <Link to={'/'}>
                            <MobileButton className='mainNavButton' name='Home'></MobileButton>
                        </Link>
                        <Link to={'/thebutchershop'}>
                            <MobileButton className='mainNavButton' name='Shop'></MobileButton>
                        </Link>
                        {props.user.email && <Link to={'/cart'}>
                            <MobileButton className='mainNavButton' name='Cart'></MobileButton>
                        </Link>}
                        {!props.user.email ? <Link to={'/login'}>
                            <MobileButton className='mainNavButton' name='Login'></MobileButton>
                        </Link> : <MobileButton className='mainNaveButton' name='Log Out' onClick={logOut}/>}
                    </div>
                }
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return { user: state.user.user }
}

export default connect(mapStateToProps, { logoutUser })(Nav)