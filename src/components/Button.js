import React from 'react'

const Button = (props) => {
    return (
        <button className={!props.toggle ? 'mainNavButton' : 'mobileNavButton'} onClick={props.onClick} >{props.name}</button>
    )
}

export default Button
