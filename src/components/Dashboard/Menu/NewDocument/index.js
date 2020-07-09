import React from "react";
import Card from "react-bootstrap/Card";
import {BsFileEarmarkPlus} from "react-icons/bs";

function NewDocument() {
    return (
        <>
            <Card bg='success'>
                <Card.Header>New document</Card.Header>
                <Card.Body>
                    <BsFileEarmarkPlus size={50} />
                </Card.Body>
            </Card>
        </>
    );
}

export default NewDocument;