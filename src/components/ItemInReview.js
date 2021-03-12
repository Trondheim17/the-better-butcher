const ItemInReview = (props) => {
    const { cut_name, cut_image, price_per_pound, qty } = props.cut
    return (
        <div className='item'>
            <div className='itemImage' style={{ backgroundImage: `url('http://${cut_image}')` }}></div>
            <div>{`${cut_name}`}</div>
            <p>{`$ ${price_per_pound}/lb`}</p>
            <p>{`${qty}`}</p>
            <p>{`Item total: $${qty * price_per_pound}`}</p>
        </div>
    )

}

export default ItemInReview