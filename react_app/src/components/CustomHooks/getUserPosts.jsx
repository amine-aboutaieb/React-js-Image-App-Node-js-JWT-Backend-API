import  { useEffect } from 'react'
import {handleVerificationResponse} from '../CustomHooks/handleVerificationResponse'

export function GetUserPosts(posts, setPosts) {
    useEffect(()=>{
        let status = 0
        if(posts.length <= 0){
            fetch('http://localhost:5500/api/post/profile', {
                method : "GET",
                mode : "cors",
                headers : {
                    "x-authentication-token" : JSON.stringify(localStorage.getItem('token'))
                }
            }).then((response)=>{
                status = response.status
                handleVerificationResponse(response)
                return response.json()
            }).then((data)=>{
                if(status === 200){
                    setPosts(data.posts)
                }else{
                    alert(data.message)
                }
            })
        }
    },[])
}
