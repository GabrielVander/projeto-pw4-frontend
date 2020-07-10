import React from 'react';
import Card from 'react-bootstrap/Card';
import {BsGrid1X2} from 'react-icons/bs';
import './styles.css';
import { motion } from 'framer-motion';
import {useHistory} from 'react-router-dom';

function ManageFlows() {
	const history = useHistory();

	return (
		<>
			<motion.div
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
			>
				<Card bg='primary' onClick={() => history.push('/flows')}>
					<Card.Header>Manage flows</Card.Header>
					<Card.Body>
						<BsGrid1X2 size={50} />
					</Card.Body>
				</Card>
			</motion.div>
		</>
	);
}

export default ManageFlows;