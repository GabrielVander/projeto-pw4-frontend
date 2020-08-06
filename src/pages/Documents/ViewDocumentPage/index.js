/* eslint-disable react/prop-types */
import React from 'react';
import ViewDocument from '../../../components/Documents/ViewDocument';
import './styles.css';

import { MOCK_DOCUMENTS } from '../../../App';

function findDocumentById(id) {
	return MOCK_DOCUMENTS.find(document => document.id === id);
}

function ViewDocumentPage(props) {
	return (
		<>
			<ViewDocument document={findDocumentById(props.match.params.documentId)}/>
		</>
	);
}

export default ViewDocumentPage;