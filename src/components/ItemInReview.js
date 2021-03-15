const ItemInReview = (props) => {
    const { cut_name, cut_image, price_per_pound, qty } = props.cut
    return (
        <div className='item'>
            <div className='itemImage' style={{ backgroundImage: `url('http://${cut_image}')` }}></div>
            <div className='itemLabel'>
                <div className='cutName'>{`${cut_name}`}</div>
                <div className='price'>{`$ ${price_per_pound}/lb`}</div>
                <div className='price'>{`Qty: ${qty}`}</div>
                <div className='price'>{`Item Total: $${qty * price_per_pound}`}</div>
            </div>
        </div>
    )

}

export default ItemInReview