import {useEffect} from 'react'

export function CheckAuth(history) {

    useEffect(()=>{
        let token = localStorage.getItem('token')
        if(token !== null){
            history.push('/')
        }
    }, [])
}