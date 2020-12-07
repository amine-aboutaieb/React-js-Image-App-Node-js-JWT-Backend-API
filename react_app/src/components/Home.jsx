import React, {useContext, useState} from 'react'
import {GetUserData} from './CustomHooks/getUserData'
import {StateContext} from './StateContext'
import {GetUserPosts} from './CustomHooks/getUserPosts'
import HomePosts from './HomePosts'


function Home() {
    GetUserData()
    const {state} = useContext(StateContext)
    const [posts, setPosts] = useState([])

    GetUserPosts(posts, setPosts)
    
    console.log("render");
    return (
        <div>
            <h2 className="homeTitle"> <span className="homeTitlep1">{state.username}'s</span> Homepage</h2>
            {
                (posts.length > 0) ?
                    <HomePosts posts={posts} setPosts={setPosts} />
                : <h3 id="noPostsMsg">No posts yet</h3>
            }
            
        </div>
    )
}

export default Home
