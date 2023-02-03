import { useState, useEffect } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { usePics } from "./GetPics";
import { PicModal } from "./Modal";

export function GetMonthlyPic(){
    const url = 'https://api.nasa.gov/planetary/apod?';
    const apiKey = 'api_key=Dn7SwBivQYIT2DJ11IaInb3mf0pmB4q076ObbVeH';
    
    
    let today = new Date();
    let year = today.getFullYear().toString();
    let month = (today.getMonth()+1).toString();
    let previuosMonth = today.getMonth().toString() === "0" ? "12": today.getMonth().toString();
    let day = today.getDate().toString();
    let todayToQuery = year.concat("-", month, "-", day);
    let startDate = month === "1" ? (today.getFullYear()-1).toString().concat("-", previuosMonth, "-", day) : year.concat("-", previuosMonth, "-", day);
    
    
    let urlToFetch = url.concat(apiKey, '&', 'start_date=', startDate, '&end_date=', todayToQuery, '&thumbs=true');
 

   const monthlyPics = usePics(urlToFetch);

   const [modalData, setModalData] = useState(null);
      
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
    

    return (
        <Container>
            <center>
                <h1>Gallery from the previous month</h1>
                <br></br>
            </center>
                <Row lg={2} className="g-4">
                    {monthlyPics ? 
                    monthlyPics.map(pic => (
                        <Col key={pic.date}>
                            <Card className={"bg-dark text-white"} >
                                <Card.Img id={pic.date} src={pic.url} alt={"Card Image"} width={"640px"} height={"480px"} loading={"lazy"} />
                                <Card.ImgOverlay onClick={() => {
                                    setShow(show => true);
                                    setModalData(modalData => pic);                              
                                }}>
                                    <Card.Title>{pic.date}</Card.Title>
                                    <Card.Text>{pic.title}</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                            
                        </Col>
                        )): (<p>Loading...</p>)
                    }
                    {show && <PicModal show={show} handleClose={handleClose} modalData={modalData} />}
                    

                </Row>
        </Container>
    )
}
