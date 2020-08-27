import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

import { API_ENDPOINT } from '../../../const/';
import Spinner from 'react-bootstrap/Spinner';

function DocumentList() {

	const [documents, setDocuments] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if(loading && documents == null) axios.get(`${API_ENDPOINT}/documents`)
			.then(response => {
				setDocuments(response.data);
				setLoading(false);
			})
			.catch(err => {
				console.log(err);
			});
	});

	const history = useHistory();
	
	return (
		<>
			<h2 className='document-list-title'>All Documents</h2>
			{loading ? 
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner> 
				: <ListGroup>
					{documents.map(document => {
						return <ListGroup.Item key={document._id} action onClick={() => history.push(`/documents/${document._id}`)}>
							{document.title}
						</ListGroup.Item>;
					})
					}
				</ListGroup>}
		</>
	);
}

export default DocumentList;