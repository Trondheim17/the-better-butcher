import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter,  Link } from 'react-router-dom'
import Button from './Button'
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
            .then(
                () => props.logoutUser(),
                console.log(props),
                props.history.push('/')
                )
    }

    return (
        <div className='nav'>
            <HamburgerMenu onClick={toggleMenu} />
            <div>
                <div className={!toggle ? 'deskTopNav' : 'showNavLinks'}>
                    <Link to={'/'}>
                        <Button toggle={toggle} name='Home'></Button>
                    </Link>
                    <Link to={'/thebutchershop'}>
                        <Button toggle={toggle} name='Shop'></Button>
                    </Link>
                    {props.user.email && <Link to={'/cart'}>
                        <Button toggle={toggle} name='Cart'></Button>
                    </Link>}
                    {!props.user.email ? <Link to={'/login'}>
                        <Button toggle={toggle} name='Login'></Button>
                    </Link> : <Button toggle={toggle} name='Log Out' onClick={logOut} />}
                </div>
                <div className='mobileNav'>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { user: state.user.user }
}

export default withRouter(connect(mapStateToProps, { logoutUser })(Nav))