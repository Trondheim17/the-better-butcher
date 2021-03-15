import React from 'react'

const Button = (props) => {
    return (
        <button className='addOrRemoveButton' onClick={props.onClick} >Add to cart</button>
    )
}

export default Button