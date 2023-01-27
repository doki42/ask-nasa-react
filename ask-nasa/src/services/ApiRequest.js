import { useState, useEffect } from "react";
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import {ImageProcessor} from "./imageProcessor";
import {usePics} from "./GetPics";

export function GetPic(){
    const url = 'https://api.nasa.gov/planetary/apod';
    const apiKey = 'api_key=Dn7SwBivQYIT2DJ11IaInb3mf0pmB4q076ObbVeH';
    const query = '?';
    

    let today = new Date();
    let year = today.getFullYear().toString();
    let month = today.getMonth() < 9 ? "0".concat((today.getMonth()+1).toString()) : (today.getMonth()+1).toString();
    let day = today.getDate().toString();
    let dateMax = year.concat("-", month, "-", day)
    // let todayToQuery = dateMax;
    const [date, setDate] = useState(dateMax);


    let urlToFetch = url.concat(query, apiKey, '&', 'start_date=', date, '&end_date=', date);

    let {pics} = usePics(urlToFetch);
   
    const handleChange = (event) => {
        setDate(event.target.value);
    }


     return (
         <Container>
             <center>
                 <h1>Astronomy picture of the day from the NASA collection</h1>
                 <br></br>
                 <Col md={6}>
                 <Form >
                     <Form.Label>Select a date</Form.Label>
                     <Form.Control
                         type={"date"}
                         min={"2000-01-01"}
                         max={dateMax}
                         onChange={event => handleChange(event)}
                         value={date}></Form.Control>
                 </Form>
                 </Col>
             {pics?.map(pic => (
                 <Row key={pic.date}>
                 <p>{pic.date}</p>
                 <ImageProcessor {...pic}/>

            <p className={"text-black"}>{pic.title}</p>
                 <p>{pic.copyright}</p>
             <p className={"text-body"}>{pic.explanation}</p>
             </Row>
             )
             )
            }
            </center>
         </Container>
     )
}