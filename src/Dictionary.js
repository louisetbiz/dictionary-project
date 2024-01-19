import "./Dictionary.css"
import axios from "axios";
import React,{ useState } from "react";

export default function Dictionary(){
    let [keyword, setKeyword] = useState(null);

    function handleResponse(response){
        console.log(response.data[0]);
    }
    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword}`);
    

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    return ( 
        <div className="Dictionary">
            <form className="Dictionary-form" onSubmit={search}>
             <input type="search" 
             onChange={handleKeywordChange}/>
            </form>
        </div>
        
    )
    
}