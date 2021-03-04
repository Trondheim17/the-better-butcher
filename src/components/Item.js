import React from 'react'

const Item = (props) => {
    const {price_per_pound, cut_name, cut_image} = props.item
    return (
        <div>
            <img src={cut_image}/>
            <h4>{`${cut_name}`}</h4>
            <p>{`$ ${price_per_pound}`}</p>
            <button>+</button>
            <button>-</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {item: state.item.item}
}

export default connect(mapStateToProps)(Item)
