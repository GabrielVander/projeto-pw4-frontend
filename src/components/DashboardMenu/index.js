import React from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import './styles.css';

function DashboardMenu() {
    return (
        <>
            <CardColumns className="custom-card-column">
                <Card bg='primary' className='custom-card'>
                    <Card.Header>Manage flows</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card bg='success' className='custom-card'>
                    <Card.Header>New document</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card bg='warning' className='custom-card'>
                    <Card.Header>View documents</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card bg='danger' className='custom-card'>
                    <Card.Header>Manage workspaces</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardColumns>
        </>
    );
}

export default DashboardMenu;