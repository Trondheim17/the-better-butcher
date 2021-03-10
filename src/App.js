import './App.css';
import routes from './routes'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUser } from './redux/userReducer'
import axios from 'axios'
import { setCart } from './redux/cartReducer'


function App(props) {

  const { getUser, setCart, isLoggedIn } = props

  useEffect(() => {
    getUser()
  }, [getUser])

  useEffect(() => {
    if (isLoggedIn) {
      axios.get('/cart/get_cart')
        .then(res => {
          console.log(res.data)
          setCart(res.data)
        }
        )
    }
  }, [isLoggedIn, setCart])


  return (
    <div className="App">
      {routes}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn
  }
}

export default connect(mapStateToProps, { getUser, setCart })(App);
