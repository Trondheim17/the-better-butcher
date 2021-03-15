import MobileButton from './MobileButton'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import { logoutUser } from '../redux/userReducer'

const MobileNav = (props) => {

    function logOut() {
        axios.post('/auth/logout')
            .then(() => props.logoutUser())
    }

    return (
        <div className='showNavLinks'>
            <Link to={'/'}>
                <MobileButton className='mainNavButton' name='Home'></MobileButton>
            </Link>
            <Link to={'/thebutchershop'}>
                <MobileButton className='mainNavButton' name='Shop'></MobileButton>
            </Link>
            {props.user.email && <Link to={'/cart'}>
                <MobileButton className='mainNavButton' name='Cart'></MobileButton>
            </Link>}
            {!props.user.email ? <Link to={'/login'}>
                <MobileButton className='mainNavButton' name='Login'></MobileButton>
            </Link> : <MobileButton className='mainNaveButton' name='Log Out' onClick={logOut} />}
        </div>)
}

const mapStateToProps = (state) => {
    return { user: state.user.user }
}

export default connect(mapStateToProps, { logoutUser })(MobileNav)