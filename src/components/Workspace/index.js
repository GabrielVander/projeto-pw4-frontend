import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import './styles.css';
import WorkspaceItem from './WorkspaceItem'

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