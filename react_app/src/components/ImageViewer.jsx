import React from 'react'

function ImageViewer({state, data}) {
    const backToApp = ()=>{
        state.setCamOn(true)
        state.setImageViewerOn(false)
    }
    return (
        <>
            <div id="imageViewerBtns">
                <button>upload</button>
                <button onClick={backToApp}>back</button>
            </div>
            <img src={data} alt="" width="60%" />
        </>
    )
}

export default ImageViewer
