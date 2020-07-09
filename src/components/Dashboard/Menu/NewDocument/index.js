import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import {BsFileEarmarkPlus} from "react-icons/bs";

function NewDocument() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <Card
                bg='success'
                className={ isHovered ? 'animate__animated animate__pulse' : ''}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Card.Header>New document</Card.Header>
                <Card.Body>
                    <BsFileEarmarkPlus size={50} />
                </Card.Body>
            </Card>
        </>
    );
}

export default NewDocument;