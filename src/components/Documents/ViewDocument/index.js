import React, {useEffect, useState} from 'react';
import PubSub from 'pubsub-js';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Toast from 'react-bootstrap/Toast';
import PropTypes from 'prop-types';
import DocumentEditor from './DocumentEditor';
import Document from '../../../model/Document';
import {DOCUMENT_SAVED} from '../../../topics/documents';
import axios from 'axios';
import './styles.css';
import {API_ENDPOINT} from '../../../const';
import {useHistory} from 'react-router-dom';
import {ContentState, EditorState} from 'draft-js';

const TOAST_DELAY_IN_MILLISECONDS = 3000;

function ViewDocument({document, editable}) {
	const isNewDocument = document === null;

	const initialEditorState = isNewDocument ?
		EditorState.createEmpty() :
		EditorState.createWithContent(
			ContentState.createFromText(document.content)
		);

	const history = useHistory();

	const [documentTitle, setDocumentTitle] = useState(isNewDocument ? 'Untitled document' : document.title);
	const [isSaving, setIsSaving] = useState(false);
	const [showToast, setShowToast] = useState(false);
	const [editorState, setEditorState] = useState(initialEditorState);

	useEffect(() => {
		PubSub.subscribe(DOCUMENT_SAVED, onDocumentSaved);
	});

	function newDocument() {
		axios
			.post(`${API_ENDPOINT}/documents`, {
				title: documentTitle,
				content: editorState.getCurrentContent().getPlainText(),
			})
			.then(response => {
				PubSub.publish(DOCUMENT_SAVED, response.data._id);
			});
	}

	function updateDocument() {
		axios
			.put(`${API_ENDPOINT}/documents/${document.id}`, {
				title: documentTitle,
				content: editorState.getCurrentContent().getPlainText(),
			})
			.then(result => result);
	}

	function save() {
		setIsSaving(true);
		isNewDocument ? newDocument() : updateDocument();
	}

	function onDocumentSaved(documentId) {
		setIsSaving(false);
		setShowToast(true);
		history.push(`/documents/${documentId}`);
	}

	return (
		<>
			<Navbar className="justify-content-between">
				<Form inline>
					<InputGroup>
						<Form.Control
							type="text"
							readOnly={!editable}
							defaultValue={documentTitle}
							onChange={(event) => setDocumentTitle(event.target.value)}
						/>
						<InputGroup.Append>
							<InputGroup.Text>
                                .txt
							</InputGroup.Text>
							<Button disabled={!editable || isSaving} onClick={save}>{
								isSaving ? 'Saving...' : 'Save'
							}
							</Button>
						</InputGroup.Append>
					</InputGroup>
				</Form>
			</Navbar>
			<Form className="form">
				<Form.Row>
					<Col>
						<DocumentEditor
							editorState={editorState}
							onEditorStateChange={setEditorState}
							readOnly={!editable}/>
					</Col>
				</Form.Row>
			</Form>
			<div className="toast-container">
				<Toast onClose={() => setShowToast(false)} show={showToast} delay={TOAST_DELAY_IN_MILLISECONDS}
					autohide>
					<Toast.Header>
                        Document saved
					</Toast.Header>
				</Toast>
			</div>
		</>
	);
}

ViewDocument.propTypes = {
	document: PropTypes.instanceOf(Document),
	editable: PropTypes.bool,
};

ViewDocument.defaultProps = {
	document: null,
	editable: true,
};

export default ViewDocument;