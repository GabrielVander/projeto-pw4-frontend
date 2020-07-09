import React from "react";
import Card from "react-bootstrap/Card";
import {BsFiles} from "react-icons/bs";

function ViewDocuments() {
    return (
        <>
            <Card bg='warning'>
                <Card.Header>View documents</Card.Header>
                <Card.Body>
                    <BsFiles size={50} />
                </Card.Body>
            </Card>
        </>
    );
}

export default ViewDocuments;