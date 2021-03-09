import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Auth from './components/Auth'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import Shop from './components/Shop'
import Cart from './components/Cart'

export default (
    <Switch>
        <Route exact path='/'>
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        </Route>
        <Route path='/login'>
            <div>
                <Header />
                <Auth />
                <Footer />
            </div>
        </Route>
        <Route path='/thebutchershop'>
            <div>
                <Header />
                <Shop />
                <Footer />
            </div>
        </Route>
        <Route path='/cart'>
            <div>
                <Header />
                <Cart />
                <Footer />
            </div>
        </Route>
        <Route path='/checkout'>
            <Header />
            <Footer />
        </Route>
    </Switch>

)