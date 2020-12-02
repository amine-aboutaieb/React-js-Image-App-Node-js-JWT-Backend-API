import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'


function ProtectedRoute({path, component}) {
    const checkRender = ()=>{
        if((localStorage.getItem('token') === null)){
            document.location.href = "/login"
        }else{
            let Component = component
            return <Component />
        }
    }
    return (
        <Route path={path} exact={true} render={checkRender} />
    )
}

export default ProtectedRoute
