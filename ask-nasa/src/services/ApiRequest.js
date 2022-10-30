import React, {useEffect, useState} from "react";



export function GetPic(){
    const url = 'https://api.nasa.gov/planetary/apod';
    const apiKey = 'api_key=Dn7SwBivQYIT2DJ11IaInb3mf0pmB4q076ObbVeH';
    const query = '?';
    let dateToQuery = "";
    let urlToFetch = url.concat(query, apiKey, '&', dateToQuery);
    const [pics, setPics] = useState({});

    async function fetchPics(){
        const res = await fetch(urlToFetch);
        res
            .json()
            .then(res => setPics(res));

    }
    useEffect(() =>{
        fetchPics();
    }, []);


     return (
         <div>
             <center>
                 <h1>Astronomy picture of the day from the NASA collection</h1>
                 <br></br>
             <p>{pics.date}</p>
             <a href={pics.hdurl}><img src={pics.url} alt="See Explanation.  Clicking on the picture will download
the highest resolution version available."/></a>
            <p>{pics.title}</p>
                 <p>{pics.copyright}</p>
             </center>
             <p>{pics.explanation}</p>
         </div>
     )
}