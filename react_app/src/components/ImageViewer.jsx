import React, { useRef } from 'react'
import {withRouter} from 'react-router-dom'
import {handleVerificationResponse} from './CustomHooks/handleVerificationResponse'

function ImageViewer({state, data, history}) {
    console.log(history);
    const titleRef = useRef()
    const backToApp = ()=>{
        state.setCamOn(true)
        state.setImageViewerOn(false)
    }

    const upload = ()=>{
        let title = titleRef.current.value
        let status = 0
        if(title !== ""){
            fetch("http://localhost:5500/api/post/upload", {
                method : "POST",
                mode : "cors",
                headers : {
                    'Content-Type' : 'application/json',
                    'x-authentication-token' : JSON.stringify(localStorage.getItem("token"))
                },
                body : JSON.stringify({title, type : "image", data})
            }).then((response)=>{
                handleVerificationResponse(response)
                status = response.status
                return response.json()
            }).then((data)=>{
                alert(data.message)
                if(status === 200){
                    console.log("go to home");
                    history.push('/')
                }
            })
        }else{
            alert("Please add a title to your post")
            titleRef.current.focus()
        }
    }

    
    return (
        <div id="imageViewerContainer">
            <button onClick={backToApp} id="imgViewerBack">Back to camera</button>
            <input type="text" placeholder="Give your image a title..." ref={titleRef} />
            <img src={data} alt="" />
            <a download="reactImg.png" id="downloadImg" href={data}>Click here to download this image...</a>
            
            <button onClick={upload}>upload</button>
        </div>
    )
}

export default withRouter(ImageViewer)
