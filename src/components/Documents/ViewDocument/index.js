import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import DocumentEditor from './DocumentEditor';
import Document from '../../../model/Document';
import PropTypes from 'prop-types';
import './styles.css';

function ViewDocument({ document, editable }) {
	const newDocument = document === null;

	const [documentTitle, setDocumentTitle] = useState(newDocument ? 'Untitled document' : document.title);
	const [isSaving, setIsSaving] = useState(false);

	function save() {
		setIsSaving(true);
		setTimeout(() => setIsSaving(false), 2000);
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