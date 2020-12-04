import React from 'react'

function HomePosts({posts}) {
    console.log(posts.length);
    return (
        <div id="postsWrapper">
            {(posts.length > 0) &&
                (
                    <div id="postsContainer">
                        {
                            
                            posts.map((item, index)=>{
                                return (
                                    <div key={item.id} className="postBox">
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
        </div>
    )
}

export default HomePosts
