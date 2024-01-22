import React from "react";
import Meaning from "./Meaning.js";

export default function Results(props){
    console.log(props.results)
    
    if (props.results) {
        
        return (
        <div className="Results">
            <section>
           <h2>{props.results.word}</h2>
           <p className="phonetics">/{props.results.phonetic}/</p>
           </section>
           
           {props.results.meanings.map(function(meaning, index) {
            return (
                <section key={index}>
                    <Meaning meaning ={meaning}/>
                </section>

        );
            })}
            </div>
        );

    
    } else {
        return null;
    }
    
}