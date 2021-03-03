import React from 'react'
import HamburgerMenuIcon from '../images/HamburgerMenuIcon.png'

const HamburgerMenu = (props) => {
    return (
        <img className='hamburgerMenu' alt='Hamburger Menu Icon' src={HamburgerMenuIcon} onClick={props.onClick} />

    )
}

export default HamburgerMenu