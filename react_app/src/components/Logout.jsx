import {useEffect} from 'react'


function Logout() {

    useEffect(()=>{
        if(localStorage.getItem("token") !== null){
            localStorage.removeItem("token")
        }
        document.location.href = "http://localhost:3000/login"
    })

    return null
}

export default Logout
