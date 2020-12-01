import React, {useRef} from 'react'
import {CheckAuth} from './CustomHooks/checkToken'

function Login({history}) {
    const emailRef = useRef()
    const pwdRef = useRef()
    const login = (e)=>{
        e.preventDefault()
        let email = emailRef.current.value
        let pwd = pwdRef.current.value
        let status = 0
        if(email === "" || pwd === ""){
            alert('Please fill all the fields')
        }else{
            fetch("http://localhost:5500/api/auth/login", {
                method : "POST",
                mode : "cors",
                headers : {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({email,pwd})
            }).then((response)=>{
                status = response.status
                return response.json()
            }).then((data)=>{
                if(status == 200){
                    alert("Auth Success")
                    console.log(data.token);
                    localStorage.setItem("token", data.token)
                    // history.push("/")
                    document.location.href = "http://localhost:3000/"
                }else if(status == 400){
                    alert(data)
                }
            })
        }
    }
    CheckAuth(history)
    return (
        <>
            <h3>Login</h3>
            <form style={{display:"flex", alignItems:"center"}}>
                <input type="text" placeholder="Email..." ref={emailRef} />
                <input type="text" placeholder="Password..." ref={pwdRef} />
                <button onClick={login}>Login</button>
            </form>
        </>
    )
}

export default Login
