import {useEffect, useState} from "react";

export const usePics = (url) => {
    const [pics, setPics] = useState([]);
    

    async function fetchPics(){
        const res = await fetch(url);
        res
            .json()
            .then(res => setPics(res));
    }
    useEffect(() => {
        fetchPics();
    }, [url]);

    return  { pics };
}