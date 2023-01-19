import {useEffect, useState} from "react";
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import {ImageProcessor} from "./imageProcessor";
import {usePics} from "./GetPics";

export function GetPic(){
    const url = 'https://api.nasa.gov/planetary/apod';
    const apiKey = 'api_key=Dn7SwBivQYIT2DJ11IaInb3mf0pmB4q076ObbVeH';
    const query = '?';
    

    let today = new Date();
    let year = today.getFullYear().toString();
    let month = (today.getMonth()+1).toString();
    let day = today.getDate().toString();
    let dateMax = year.concat("-", month, "-", day)
    let todayToQuery = dateMax;
    const [date, setDate] = useState(()=>todayToQuery);


    let urlToFetch = url.concat(query, apiKey, '&', 'date=', date);

    const { pics } = usePics(urlToFetch);


     return (
         <Container>
             <center>
                 <h1>Astronomy picture of the day from the NASA collection</h1>
                 <br></br>
                 <Col md={6}>
                 <Form onSubmit={event => {

                     event.preventDefault();
                 }}>
                     <Form.Label>Select a date</Form.Label>
                     <Form.Control
                         type={"date"} min={"2000-01-01"} max={`${dateMax}`}
                         onChange={event => setDate(event.target.value)}></Form.Control>
                     <Button type={"submit"}>Go!</Button>
                 </Form>
                 </Col>
             <p>{pics.date}</p>
                 <ImageProcessor {...pics}/>

            <p className={"text-black"}>{pics.title}</p>
                 <p>{pics.copyright}</p>
             </center>
             <p className={"text-body"}>{pics.explanation}</p>
         </Container>
     )
}