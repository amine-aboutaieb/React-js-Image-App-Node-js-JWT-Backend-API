import {useEffect, useContext} from 'react'
import {StateContext} from './StateContext'


function Logout({history}) {
    const {state, dispatch} = useContext(StateContext)
    useEffect(()=>{
        dispatch({type : "clearState"})
        if(localStorage.getItem("token") !== null){
            localStorage.removeItem("token")
            //document.location.href = "/login"
            history.push('/login')
        }else{
            history.push("/")
        }
        
        // history.push('/login')
    })

    return null
}

export default Logout
