import React from 'react'

const Button = (props) => {
    return (
        <button className='addToCartButton' onClick={props.onClick} >Add to cart</button>
    )
}

export default Button