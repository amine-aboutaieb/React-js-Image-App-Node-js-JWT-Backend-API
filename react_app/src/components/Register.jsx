import React, {useRef} from 'react'
import {CheckAuth} from './CustomHooks/checkToken'

function Register({history}) {
    CheckAuth(history)

    const usernameRef = useRef()
    const emailRef = useRef()
    const pwdRef = useRef()

    const register = (e)=>{
        e.preventDefault()
        let username = usernameRef.current.value
        let email = emailRef.current.value
        let pwd = pwdRef.current.value
        let status = 0
        if(email === "" || pwd === "" || username === ""){
            alert('Please fill all the fields')
        }else{
            fetch("http://localhost:5500/api/user/register", {
                method : "POST",
                mode : "cors",
                headers : {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({username, email, pwd})
            }).then((response)=>{
                status = response.status
                return response.json()
            }).then((data)=>{
                if(status === 400 || status === 500){
                    alert(data.message)
                }else if(status === 200){
                    history.push('/login')
                }
            })
        }
    }
    return (
        <>
            <h3>Register</h3>
            <form style={{display:"flex", alignItems:"center"}}>
                <input type="text" placeholder="Username..." ref={usernameRef} />
                <input type="text" placeholder="Email..." ref={emailRef} />
                <input type="text" placeholder="Password..." ref={pwdRef} />
                <button onClick={register}>Register</button>
            </form>
        </>
    )
}

export default Register