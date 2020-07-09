import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import {BsFolder} from "react-icons/bs";

function ManageWorkspaces() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <Card
                bg='danger'
                className={ isHovered ? 'animate__animated animate__pulse' : ''}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Card.Header>Manage workspaces</Card.Header>
                <Card.Body>
                    <BsFolder size={50}/>
                </Card.Body>
            </Card>
        </>
    );
}

export default ManageWorkspaces;