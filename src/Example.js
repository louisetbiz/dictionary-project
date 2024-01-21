import React from "react"

export default function Example(props){
    if (props.example) {
        return(
            <div>
            <strong>Example:</strong>
            <p><em>"{props.example}"</em></p>
            </div>
        )
    } else {
        return null;
    }
    
    
    
}