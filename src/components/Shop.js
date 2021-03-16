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

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='shopContainer'>
            <div className='grunge' style={{ backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/5d4dc574034e1f000197bad0/1566400416112-BDMLTW8MH8W53BMHLP6S/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/grunge-stone1-overlay-example.jpg?format=2500w)' }}>
                <div className='shopTag'> FARM TO BUTCHER TO TABLE</div>
                <div className='shopTagSub'>Responsibly sourced. Expertly cut. Delivered to your door.</div>
            </div>
            <div className='imageBlocks'>
                {props.items.map((item) => {
                    return <Item key={item.cut_id} cut={item} />
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { items: state.item.items }
}

export default connect(mapStateToProps, { setItems })(Shop)