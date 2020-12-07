import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import Camera from './Camera'
import Login from './Login'
import Register from './Register'
import Logout from './Logout'
import ProtectedRoute from './ProtectedRoute'
import StateReducer from './StateReducer'
import {StateContext} from './StateContext'
import Error from './Error'

function Router() {
    const [state, dispatch] = StateReducer()
    return (       
        <BrowserRouter>
        <StateContext.Provider value={{state, dispatch}}>
            <NavBar />
            <Switch>          
                <Route path="/Register" exact component={Register} />
                <Route path="/logout" exact component={Logout} />
                <Route path="/login" exact component={Login} /> 
                <ProtectedRoute exact path="/" component={Home}></ProtectedRoute>
                <ProtectedRoute exact path="/camera" component={Camera}></ProtectedRoute>   
                <Route component={Error} />
            </Switch>
            </StateContext.Provider>  
        </BrowserRouter>
    )
}

export default Router
