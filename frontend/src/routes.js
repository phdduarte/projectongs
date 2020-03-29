import React from 'react'
// para instalar utilize npm install react-router-dom
import { BrowserRouter, Route, Switch } from 'react-router-dom' 
// BrowserRouter é necessario para que todo o roteamento funcione
// Switch é necessario para chamar uma rota por momento

import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}