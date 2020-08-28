import React from 'react';
import PropTypes from 'prop-types';
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';

function DocumentEditor({readOnly, editorState, onEditorStateChange}) {
	return (
		<>
			<Container className="main-container">
				<Row className="main-row">
					<Col>
						<Editor
							editorState={editorState}
							toolbarClassName="toolbar"
							readOnly={readOnly}
							editorClassName="editor"
							onEditorStateChange={onEditorStateChange}
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
}

DocumentEditor.propTypes = {
	editorState: PropTypes.shape({}),
	onEditorStateChange: PropTypes.func,
	readOnly: PropTypes.bool,
};

DocumentEditor.defaultProps = {
	editorState: null,
	onEditorStateChange: null,
	readOnly: false,
};

export default DocumentEditor;