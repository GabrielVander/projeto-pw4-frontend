import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import {BsFiles} from "react-icons/bs";

function ViewDocuments() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <Card
                bg='warning'
                className={ isHovered ? 'animate__animated animate__pulse' : ''}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Card.Header>View documents</Card.Header>
                <Card.Body>
                    <BsFiles size={50} />
                </Card.Body>
            </Card>
        </>
    );
}

export default ViewDocuments;