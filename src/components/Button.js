import React from 'react'

const Button = (props) => {
    return (
        <button className='mainNavButton' onClick={props.onClick} >{props.name}</button>
    )
}

export default Button
