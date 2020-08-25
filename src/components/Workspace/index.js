import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import './styles.css';
import WorkspaceItem from './WorkspaceItem'
import axios from 'axios';

function getWorkspaces () {
	axios
		.get(`/documents/${document.id}`)
		.then( response => {

		})
}

function ViewWorkspace() {
	return (
		<>
			<header className='header'>
				<h2>
                    Select a workspace:
				</h2>
			</header>
			<CardDeck>
				<WorkspaceItem name="teste" />
			</CardDeck>
		</>
	);
}

export default ViewWorkspace;