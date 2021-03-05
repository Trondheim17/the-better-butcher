import React from 'react'

const Item = (props) => {
    const { price_per_pound, cut_name, cut_image } = props.item
    return (
        <div className='item'>
            <div className='itemImage' style={{ backgroundImage: `url('http://${cut_image}')` }}></div>
            <div>{`${cut_name}`}</div>
            <p>{`$ ${price_per_pound}`}</p>
            <div className='itemButtons'>
                <button>+</button>
                <p>qty</p>
                <button>-</button>
            </div>
        </div>
    )
}


export default Item
