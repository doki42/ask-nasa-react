import React, {useEffect, useState} from "react";
import {Button, Modal, Row, Col, Card} from "react-bootstrap";
import {ImageProcessor} from "./imageProcessor";

export function GetMonthlyPic(){
    const url = 'https://api.nasa.gov/planetary/apod';
    const apiKey = 'api_key=Dn7SwBivQYIT2DJ11IaInb3mf0pmB4q076ObbVeH';
    const query = '?';
    const [pics, setPics] = useState([]);

    let today = new Date();
    let year = today.getFullYear().toString();
    let month = (today.getMonth()+1).toString();
    let previuosMonth = today.getMonth().toString();
    let day = today.getDate().toString();
    let todayToQuery = year.concat("-", month, "-", day);
    let startDate = year.concat("-", previuosMonth, "-", day);
    const [date, setDate] = useState(()=>todayToQuery);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let urlToFetch = url.concat(query, apiKey, '&', 'start_date=', startDate, '&end_date=', date, '&thumbs=true');


    async function fetchPics(){
        const res = await fetch(urlToFetch);
        res
            .json()
            .then(res => setPics(res));
        console.log(pics);
    }
    useEffect(() => {
        fetchPics();
    }, []);


    return (
        <div>
            <center>
                <h1>Gallery from the previous month</h1>
                <br></br>
            </center>
                <Row lg={2} className="g-4">
                    {pics.map(pic => (
                        <Col>
                            <Card className={"bg-dark text-white"}>
                                <Card.Img src={pic.url} alt={"Card Image"} width={"640px"} height={"480px"} />
                                <Card.ImgOverlay onClick={handleShow}>
                                    <Card.Title>{pic.date}</Card.Title>
                                    <Card.Text>{pic.title}</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{pic.date}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <center>
                                        <ImageProcessor {...pic}/>
                                        <p className={"text-black"}>{pic.title}</p>
                                        <p>{pic.copyright}</p>
                                    </center>
                                    <p className={"text-body"}>{pic.explanation}</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Col>
                        ))
                    }

                </Row>
        </div>
    )
}
