import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import {BsGrid1X2} from "react-icons/bs";

function ManageFlows() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <Card
                bg='primary'
                className={ isHovered ? 'animate__animated animate__pulse' : ''}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Card.Header>Manage flows</Card.Header>
                <Card.Body>
                    <BsGrid1X2 size={50} />
                </Card.Body>
            </Card>
        </>
    );
}

export default ManageFlows;