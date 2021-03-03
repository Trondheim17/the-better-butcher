import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Auth from './components/Auth'
import Main from './components/Main'
import Header from './components/Header'

export default (
    <Switch>
        <Route exact path='/'>
            <div>
                <Header />
                <Main />
            </div>
        </Route>
        <Route path='/login'>
            <div>
                <Header />
                <Auth />
            </div>
        </Route>
        <Route path='/thebutchershop'>
            <div>
                <Header />
            </div>
        </Route>
        <Route path='/themeat'>
            <div>
                <Header />
            </div>
        </Route>
    </Switch>

)