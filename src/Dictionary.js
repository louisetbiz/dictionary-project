import "./Dictionary.css"
import Results from "./Results.js";
import axios from "axios";
import React,{ useState } from "react";

export default function Dictionary(){
    let [keyword, setKeyword] = useState(null);
    let [results, setResults] = useState (null);

    function handleResponse(response){
       
        setResults(response.data);
    }
    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword}`);
    
    let apiKey="ee030ced13bec32faetaa24oa4e6af48";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    return ( 
        <div className="Dictionary">
            <form className="Dictionary-form d-flex justify-content-center" onSubmit={search}>
             <input type="search" 
             onChange={handleKeywordChange}/>
            </form>
            <Results results={results} />
        </div>
        
    )
    
}