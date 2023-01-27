import React from "react";
import {Button, Modal } from "react-bootstrap";
import {ImageProcessor} from "./imageProcessor";

export function PicModal ({show, handleClose, modalData}){
    return (
        <Modal 
            show={show}
            onHide={handleClose}
            id={modalData.date}
            centered
            size={"xl"}>
            <Modal.Header closeButton>
                <Modal.Title>{modalData.date}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center">
                    <ImageProcessor {...modalData}/>
                    <p className={"text-black"}>{modalData.title}</p>
                    <p className={"text-black"}>{modalData.copyright}</p>
                </div>
                <p className={"text-body"}>{modalData.explanation}</p>
                                    
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                     Close
                </Button>
            </Modal.Footer>
         </Modal>
    )

}