import React, {useReducer} from 'react'

function reducer(state, action){
    let {type, payload} = action
    if(type === "setId"){
        console.log(type, payload);
        return {...state, id : payload.id}
    }
    
}

function StateReducer() {
    const [state, dispatch] = useReducer(reducer, {id : null})
    return [state, dispatch]
}

export default StateReducer
