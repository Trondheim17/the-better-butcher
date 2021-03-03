import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import MobileButton from './MobileButton'
import HamburgerMenu from './HamburgerMenu'

const Nav = () => {
    const [toggle, setToggle] = useState(false)
    
    function toggleMenu() {
        return setToggle(!toggle)
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
                <Link to={'/themeat'}>
                    <Button name='About Cows'></Button>
                </Link>
                <Link to={'/login'}>
                    <Button name='Login'></Button>
                </Link>
            </div>
            <div className='mobileNav'>
                <HamburgerMenu onClick={toggleMenu} />
                {toggle &&
                    <div>
                        <Link to={'/'}>
                            <MobileButton className='mainNavButton' name='Home'></MobileButton>
                        </Link>
                        <Link to={'/login'}>
                            <MobileButton className='mainNavButton' name='Login'></MobileButton>
                        </Link>
                        <Link to={'/thebutchershop'}>
                            <MobileButton className='mainNavButton' name='Shop'></MobileButton>
                        </Link>
                        <Link to={'/themeat'}>
                            <MobileButton className='mainNavButton' name='About Cows'></MobileButton>
                        </Link>
                    </div>
                }
            </div>
        </React.Fragment>
    )
}

export default Nav