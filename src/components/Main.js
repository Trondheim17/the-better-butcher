import React, { useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'

const Main = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

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
            <div className='cattleMain2' style={{ backgroundImage: 'url(https://www.blackhillsbadlands.com/sites/default/files/photos/business/dennis-ranch/cattledrive.jpg)' }}>
                <div className='mainLabel'>
                    <div className='mainTag'>OUR STORY</div>
                    <div className='mainSubTag'>How we came to be experts in out trade.</div>
                    <Link to={'/about'}>
                        <button className='mainButton'>read</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Main)