import React, {useReducer} from 'react'

function reducer(state, action){
    let {type, payload} = action
    if(type === "setStateData"){
        return {...state, id : payload.id, username : payload.username, email : payload.email}
    }else if(type === "clearState"){
        return {...state, id : null, username : null, email : null }
    }
    
}

function StateReducer() {
    const [state, dispatch] = useReducer(reducer, {id : null, username : null, email : null})
    return [state, dispatch]
}

export default StateReducer
