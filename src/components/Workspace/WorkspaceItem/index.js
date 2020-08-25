import React from 'react';
import './styles.css';
import Card from 'react-bootstrap/Card';
import {BsGrid1X2} from 'react-icons/bs';
import { motion } from 'framer-motion';
import {useHistory} from 'react-router-dom';

function WorkspaceItem(props) {
	const history = useHistory();

	return (
		<>
			<motion.div
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
			>
				<Card bg='primary' onClick={() => history.push('/dashboard')}>
					<Card.Header>{props.name}</Card.Header>
					<Card.Body>
						<BsGrid1X2 size={100} />
					</Card.Body>
				</Card>
			</motion.div>
		</>
	);
}

export default WorkspaceItem;