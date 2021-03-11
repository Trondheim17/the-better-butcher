import React from 'react'

const Button = (props) => {
    return (
        <button className='deleteItemButton' onClick={props.onClick} >Delete</button>
    )
}

export default Button