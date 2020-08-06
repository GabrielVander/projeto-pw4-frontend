import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

import Document from '../../../model/Document';

function DocumentList({ documents }) {

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

DocumentList.propTypes = {
	documents: PropTypes.arrayOf(Document),
};

DocumentList.defaultProps = {
	documents: null,
};

export default DocumentList;