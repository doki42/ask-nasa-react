import {useEffect, useState} from "react";

export const usePics = (urlToFetch) => {
    const [pics, setPics] = useState({});
    

    async function fetchPics(){
        const res = await fetch(urlToFetch);
        res
            .json()
            .then(res => setPics(res));
    }
    useEffect(() => {
        fetchPics();
    }, []);

    return { pics };
}