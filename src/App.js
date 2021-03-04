import './App.css';
import routes from './routes'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUser } from './redux/userReducer'


function App(props) {

  useEffect(() => {
    props.getUser()
  })

  return (
    <div className="App">
      {routes}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps, { getUser })(App);
