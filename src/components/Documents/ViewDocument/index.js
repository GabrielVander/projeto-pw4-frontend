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
import './styles.css';

const TOAST_DELAY_IN_MILLISECONDS = 3000;

function ViewDocument({ document, editable }) {
	const newDocument = document === null;

	const [documentTitle, setDocumentTitle] = useState(newDocument ? 'Untitled document' : document.title);
	const [isSaving, setIsSaving] = useState(false);
	const [showToast, setShowToast] = useState(false);

	useEffect(() => {
		PubSub.subscribe(DOCUMENT_SAVED, onDocumentSaved);
	});

	function save() {
		setIsSaving(true);
		setTimeout(() => PubSub.publish(DOCUMENT_SAVED), 2000);
	}

	function onDocumentSaved() {
		setIsSaving(false);
		setShowToast(true);
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
							onChange={(target) => setDocumentTitle(target.value)}
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
						<DocumentEditor document={document} readOnly={!editable}/>
					</Col>
				</Form.Row>
			</Form>
			<div className="toast-container">
				<Toast onClose={() => setShowToast(false)} show={showToast} delay={TOAST_DELAY_IN_MILLISECONDS} autohide>
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