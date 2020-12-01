import React, {useEffect, useContext} from 'react'


export const VerifyToken = (history, state, dispatch)=> {
    useEffect(()=>{
        fetch('http://localhost:5500/api/auth/verify',{
            method : "GET",
            mode : "cors",
            headers : {
                'x-authentication-token' : JSON.stringify(localStorage.getItem("token"))
            }
            
        }).then((response)=>{
            if(response.status === 400){
                localStorage.removeItem('token')
                history.push('/')
            }else{
                return response.json()
            }
        }).then((data)=>{
            console.log(data.payload.id);
            dispatch({type : "setId", payload : {id : data.payload.id}})
        })
    }, [history])
    return 0
}

