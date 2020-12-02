import React, {useEffect, useContext} from 'react'
import {handleVerificationResponse} from './handleVerificationResponse'
import {StateContext} from '../StateContext'

export function GetUserData() {
    const {state, dispatch} = useContext(StateContext)
    let status = 0
    useEffect(()=>{
        fetch('http://localhost:5500/api/user/data',{
            method : "GET",
            mode : "cors",
            headers : {
                'x-authentication-token' : JSON.stringify(localStorage.getItem("token"))
            }
            
        }).then((response)=>{
            handleVerificationResponse(response)
            status = response.status
            return response.json()
        }).then((data)=>{
            if(status === 200){
                
                dispatch({type:"setStateData", payload : {id : data.id, username : data.data.username, email : data.data.email}})
            }else{
                alert(data.message)
            }
        })
    }, [])

}