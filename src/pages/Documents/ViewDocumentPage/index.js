/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';

import ViewDocument from '../../../components/Documents/ViewDocument';
import { API_ENDPOINT } from '../../../const';

import './styles.css';

function ViewDocumentPage(props) {

	const [document, setDocument] = useState(null);

	axios.get(`${API_ENDPOINT}/documents/${props.match.params.documentId}`)
		.then(response => {
			setDocument(response.data);
		})
		.catch(err => {
			console.log(err);
		});

	return (
		<>
			<ViewDocument document={document} />
		</>
	);
}

export default ViewDocumentPage;