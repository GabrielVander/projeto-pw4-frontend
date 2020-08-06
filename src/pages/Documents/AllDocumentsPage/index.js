import React from 'react';
import PropTypes from 'prop-types';
import DocumentList from '../../../components/Documents/DocumentList';
import './styles.css';

function AllDocumentsPage ({ documents }) {
	return (
		<>
			<DocumentList documents={documents}/>
		</>
	);
}

AllDocumentsPage.propTypes = {
	documents: PropTypes.arrayOf(Document),
};

export default AllDocumentsPage;