import React from 'react'
import Router from './Router'
import '../index.css'


function App() {
    console.log("App render");
    return (
        <>
            <h1 className="mainTitle">React js Image App</h1>
            <Router />
        </>
    )
}

export default App