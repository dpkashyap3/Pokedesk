import React from 'react'
import "./Loading.css"

function Loading() {
    return (
        <div className="contain">
        <div className="overlay"></div>
        
        <div className="spinner-border spin-center" style={{width:"3rem",height:"3rem"}} role="status">
        <span className="sr-only">Loading...</span>
        </div>
        
        
        
        </div>
    )
}

export default Loading
