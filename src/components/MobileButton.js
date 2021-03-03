import React from 'react'

const MobileButton = (props) => {
    return (
        <button className='mobileButton' onClick={props.onClick} >{props.name}</button>
    )
}

export default MobileButton