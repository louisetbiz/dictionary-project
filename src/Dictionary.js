import "./Dictionary.css"
import Results from "./Results.js";
import axios from "axios";
import React,{ useState } from "react";
import Photos from "./Photos.js"

export default function Dictionary(){
    let [keyword, setKeyword] = useState(null);
    let [results, setResults] = useState (null);
    let [loaded, setLoaded] = useState (false);
    let [photos, setPhotos] =useState (null);

    function handleResponse(response){
        setResults(response.data);
    }

    function handlePhotoResponse(response){
        setPhotos(response.data.photos);
    }

    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword}`);
    
    let apiKey="ee030ced13bec32faetaa24oa4e6af48";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let photoApiKey = "ee030ced13bec32faetaa24oa4e6af48";
    let photoApiUrls =`https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photoApiKey}
    `;   
    axios.get(photoApiUrls).then(handlePhotoResponse);


}

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    return ( 
        <div className="Dictionary">
            <section>
            <form className="Dictionary-form d-flex justify-content-center" onSubmit={search}>
             <input type="search" placeholder="write here to search your word"
             onChange={handleKeywordChange}/>
            </form>
            </section>
            <Results results={results} />
            <Photos photos={photos} />
        </div>
        
    )
    
}