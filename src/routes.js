import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Auth from './components/Auth'

export default (
    <Switch>
        <Route exact path='/'></Route>
        <Route path='/login'>
            <div>
                <Auth />
            </div>
        </Route>
        <Route path='/thebutchershop'></Route>
        <Route path='/themeat'></Route>
    </Switch>

)