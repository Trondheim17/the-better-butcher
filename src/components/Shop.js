import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Item from './Item'

const Shop = () => {
    const [shopList, setShopList] = useState([])

    useEffect(() => {
        axios.get('/item/all_items')
            .then(res =>
                setShopList(res.data)
            )
    }, [])

    return (
        <div className='imageBlocks'>
            {shopList.map((item) => {
                return <Item key={item.cut_id} item={item} />
            })}
        </div>
    )
}

export default Shop