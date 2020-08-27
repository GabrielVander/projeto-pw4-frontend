import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

import API_ENDPOINT from '../../../const/';

function DocumentList() {

	const [documents, setDocuments] = useState([]);

	axios.get(`${API_ENDPOINT}/documents`)
		.then(response => {
			setDocuments(response.data);
		})
		.catch(err => {
			console.log(err);
		});

	const history = useHistory();
	
	return (
		<>
			<h2 className='document-list-title'>All Documents</h2>
			<ListGroup>
				{documents.map(document => {
					return <ListGroup.Item key={document.id} action onClick={() => history.push(`/documents/${document.id}`)}>
						{document.title}
					</ListGroup.Item>;
				})
				}
			</ListGroup>
		</>
	);
}

export default DocumentList;