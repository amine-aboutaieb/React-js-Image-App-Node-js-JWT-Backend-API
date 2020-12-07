import React, { useState } from 'react'
import HomeImagePlayer from './HomeImagePlayer'

function HomePosts({posts, setPosts}) {
    const [showPlayer, setShowPlayer] = useState(false)
    const [playerData, setPlayerData] = useState(null)
    const [currentPlayerImage, setCurrentPlayerImage] = useState(null)
    const handleImagePlayer = (clickedImg, index)=>{
        setShowPlayer(true)
        setPlayerData(clickedImg)
        setCurrentPlayerImage(index)
    }
    const handleLeftBtn = ()=>{
        if((currentPlayerImage - 1) < 0 ){
            setCurrentPlayerImage(posts.length - 1)
            setImageDataByIndex(posts.length - 1)
        }else{
            setCurrentPlayerImage(currentPlayerImage - 1)
            setImageDataByIndex(currentPlayerImage - 1)
        }
    }
    const handleRightBtn = ()=>{
        if((currentPlayerImage + 1) === posts.length ){
            setCurrentPlayerImage(0)
            setImageDataByIndex(0)
        }else{
            setCurrentPlayerImage(currentPlayerImage + 1)
            setImageDataByIndex(currentPlayerImage + 1)
        }
    }
    const setImageDataByIndex = (index)=>{
        let data = posts[index].dataStr
        setPlayerData(data)
    }

    return (
        <div id="postsWrapper">
            {(posts.length > 0) &&
                (
                    <div id="postsContainer">
                        {
                            
                            posts.map((item, index)=>{
                                return (
                                    <div key={item.id} className="postBox" onClick={()=>{handleImagePlayer(item.dataStr, index)}}>
                                    {(item.type === "image") &&
                                    <>
                                        <p> {item.title} </p>
                                        <img src={item.dataStr} alt=""/>
                                    </>
                                    }
                                </div>
                                )
                            })
                        }
                    </div>
                )
                
            }
            {(showPlayer) && <HomeImagePlayer imageData={playerData} setShowPlayer={setShowPlayer} handleLeftBtn={handleLeftBtn} handleRightBtn={handleRightBtn} />}
        </div>
    )
}

export default HomePosts
