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
                {/* <svg color='#FFFFFF'aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" class="svg-inline--fa fa-shopping-cart fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="-400 0 15000 512"><path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>, */}
                <Button name='Cart'></Button>
                </Link>}
                {!props.user.email ? <Link to={'/login'}>
                    <Button name='Login'></Button>
                </Link> : <Button name='Log Out' onClick={logOut} />}
            </div>
            <div className='mobileNav'>
                <HamburgerMenu onClick={toggleMenu} />
                {toggle &&
                    <div className='mobileNav'>
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