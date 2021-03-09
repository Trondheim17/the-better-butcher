import React, { useEffect } from 'react'
import axios from 'axios'
import Item from './Item'
import { setItems } from '../redux/itemReducer'
import { connect } from 'react-redux'

const Shop = (props) => {
    const { setItems } = props
    const { items } = props

    useEffect(() => {
        if (!items.length) {
            axios.get('/item/all_items')
                .then(res =>
                    setItems(res.data)
                )
        } 
    }, [setItems, items])

    return (
        <div className='imageBlocks'>
            {props.items.map((item) => {
                return <Item key={item.cut_id} cut={item} />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { items: state.item.items }
}

export default connect(mapStateToProps, { setItems })(Shop)