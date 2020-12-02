import React from 'react'

export function handleVerificationResponse(response) {

    if(response.status === 401){
        localStorage.removeItem("token")
        document.location.href = "/"
    }
}