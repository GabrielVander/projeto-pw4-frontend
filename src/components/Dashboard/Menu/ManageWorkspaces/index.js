import React from "react";
import Card from "react-bootstrap/Card";
import {BsFolder} from "react-icons/bs";

function ManageWorkspaces() {
    return (
        <>
            <Card bg='danger'>
                <Card.Header>Manage workspaces</Card.Header>
                <Card.Body>
                    <BsFolder size={50}/>
                </Card.Body>
            </Card>
        </>
    );
}

export default ManageWorkspaces;