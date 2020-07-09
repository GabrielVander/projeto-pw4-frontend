import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import './styles.css';
import ManageFlows from "./ManageFlows";
import NewDocument from "./NewDocument";
import ViewDocuments from "./ViewDocuments";
import ManageWorkspaces from "./ManageWorkspaces";

function DashboardMenu() {
    return (
        <>
            <header className='header'>
                <h2>
                    Menu
                </h2>
            </header>
            <CardDeck>
                <ManageFlows/>
                <NewDocument/>
                <ViewDocuments/>
                <ManageWorkspaces/>
            </CardDeck>
        </>
    );
}

export default DashboardMenu;