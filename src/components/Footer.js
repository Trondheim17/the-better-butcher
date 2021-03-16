import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div>The Better Butcher</div>
            <div>
                <Link to={'/'}>
                    <button className='footerButton home'>Home</button>
                </Link>
                <Link to={'/thebutchershop'}>
                    <button className='footerButton'>| Shop |</button>
                </Link>
                Privacy Policy  |  Terms  |  Site Map
            </div>
            <div>© 2021 The Better Butcher</div>
        </div>
    )
}

export default withRouter(Footer)