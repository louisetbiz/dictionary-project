import React from "react";
import Example from "./Example.js"
import Synonyms from "./Synonyms.js"

export default function Meaning (props){
  
    
  
    return (
        <div className="Meaning">
          <h3>{props.meaning.partOfSpeech}</h3>
        
          <strong>Definition:</strong>
          <p>{props.meaning.definition}</p>  

         <Example example={props.meaning.definition}/>
         <Synonyms synonym={props.meaning.synonyms} />
          
          
        </div>
      );
}