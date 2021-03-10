import React from 'react'

const Button = (props) => {
    return (
        <button className='addToCartButton' onClick={props.onClick} >Delete</button>
    )
}

export default Button