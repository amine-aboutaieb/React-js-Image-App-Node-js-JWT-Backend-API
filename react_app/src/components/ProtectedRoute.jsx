import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'


function ProtectedRoute({path, children}) {
    const checkRender = ({history})=>{
        if((localStorage.getItem('token') === null)){
            document.location.href = "/login"
            //return <Redirect to="/login" />
        }else{
            return children
        }
    }
    return (
        <Route path={path} render={checkRender} />
    )
}

export default ProtectedRoute
