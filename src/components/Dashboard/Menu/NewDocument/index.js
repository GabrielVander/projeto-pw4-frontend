import React from 'react';
import Card from 'react-bootstrap/Card';
import {BsFileEarmarkPlus} from 'react-icons/bs';
import './styles.css';
import { motion } from 'framer-motion';
import {useHistory} from 'react-router-dom';

function NewDocument() {
	const history = useHistory();

	return (
		<>
			<motion.div
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
			>
				<Card bg='success' onClick={() => history.push('/documents/new')}>
					<Card.Header>New document</Card.Header>
					<Card.Body>
						<BsFileEarmarkPlus size={50} />
					</Card.Body>
				</Card>
			</motion.div>
		</>
	);
}

export default NewDocument;