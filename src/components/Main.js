import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const Main = () => {

    return (
        <div className='main'>
            <div className='cattleMain' style={{ backgroundImage: 'url(http://www.arizonabeef.org/Media/AZBeef/Images/dsc_0016-copy.JPG)' }}>
                <div className='mainLabel'>
                    <div className='mainTag'>GRASS RAISED QUALITY ARIZONA CATTLE</div>
                    <div className='mainSubTag'>Arizona born and raised to ensure the best quality.</div>
                    <Link to={'/thebutchershop'}>
                        <button className='mainButton'>shop</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Main)