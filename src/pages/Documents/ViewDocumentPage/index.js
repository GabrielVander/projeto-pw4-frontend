/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import axios from 'axios';

import ViewDocument from '../../../components/Documents/ViewDocument';
import {API_ENDPOINT} from '../../../const';

import './styles.css';
import Document from '../../../model/Document';

function ViewDocumentPage(props) {

	const [document, setDocument] = useState(null);

	useEffect(() => {
		if(document == null) axios.get(`${API_ENDPOINT}/documents/${props.match.params.documentId}`)
			.then(response => {
				setDocument(
					new Document(
						response.data._id,
						response.data.title,
						response.data.content
					)
				);
			})
			.catch(err => {
				console.log(err);
			});
	}
	);

	return (
		<>
			{ document && <ViewDocument document={document} />}
		</>
	);
}

export default ViewDocumentPage;