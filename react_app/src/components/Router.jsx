import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import Camera from './Camera'
import Login from './Login'
import Register from './Register'
import Logout from './Logout'
import ProtectedRoute from './ProtectedRoute'
import StateReducer from './StateReducer'
import {StateContext} from './StateContext'

function Router() {
    const [state, dispatch] = StateReducer()
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/Register" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <Route path="/logout" component={Logout} />
                <StateContext.Provider value={{state, dispatch}}>
                    <ProtectedRoute path="/" component={Home}></ProtectedRoute>
                    <ProtectedRoute path="/camera" component={Camera}></ProtectedRoute>   
                </StateContext.Provider>  
            </Switch>
        </BrowserRouter>
    )
}

export default Router
