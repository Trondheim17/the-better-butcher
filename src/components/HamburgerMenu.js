import React from 'react'
import WhiteHam from '../images/WhiteHam.png'

const HamburgerMenu = (props) => {
    return (
        <img className='hamburgerMenu' alt='Hamburger Menu Icon' src={WhiteHam} onClick={props.onClick} />

    )
}

export default HamburgerMenu