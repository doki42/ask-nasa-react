import React from "react";


export function ImageProcessor(props){
    let isImage = props.media_type === "image";

    switch (isImage){
        case false:
            return (
                <iframe src={props.url} ></iframe>
            )
        default:
            return (<a href={props.hdurl}><img src={props.url} alt="See Explanation.  Clicking on the picture will download
the highest resolution version available."/></a>);
    }

}