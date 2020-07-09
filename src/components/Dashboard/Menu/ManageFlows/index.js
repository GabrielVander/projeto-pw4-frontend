import React from "react";
import Card from "react-bootstrap/Card";
import {BsGrid1X2} from "react-icons/bs";

function ManageFlows() {
    return (
        <>
            <Card bg='primary'>
                <Card.Header>Manage flows</Card.Header>
                <Card.Body>
                    <BsGrid1X2 size={50} />
                </Card.Body>
            </Card>
        </>
    );
}

export default ManageFlows;