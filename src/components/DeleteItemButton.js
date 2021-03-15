import React from 'react'

const Button = (props) => {
    return (
        <button className='addOrRemoveButton' onClick={props.onClick} >Delete</button>
    )
}

export default Button