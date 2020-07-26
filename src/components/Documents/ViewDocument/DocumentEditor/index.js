import React, {useState} from 'react';
import {EditorState, ContentState} from 'draft-js';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Document from '../../../../model/Document';
import './styles.css';

function DocumentEditor({ document, readOnly }) {
	const newDocument = document === null;

	const initialEditorState = newDocument ?
		EditorState.createEmpty() :
		EditorState.createWithContent(
			ContentState.createFromText(document.content)
		);
	
	const [editorState, setEditorState] = useState(initialEditorState);

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
							onEditorStateChange={setEditorState}
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
}

DocumentEditor.propTypes = {
	document: PropTypes.instanceOf(Document),
	readOnly: PropTypes.bool,
};

DocumentEditor.defaultProps = {
	document: null,
	readOnly: false,
};

export default DocumentEditor;