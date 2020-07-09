import React from "react";
import Card from "react-bootstrap/Card";
import {BsFiles} from "react-icons/bs";
import { motion } from "framer-motion"
import {useHistory} from "react-router-dom";

function ViewDocuments() {
    const history = useHistory();

    return (
        <>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Card bg='warning' onClick={() => history.push('/documents')}>
                    <Card.Header>View documents</Card.Header>
                    <Card.Body>
                        <BsFiles size={50} />
                    </Card.Body>
                </Card>
            </motion.div>
        </>
    );
}

export default ViewDocuments;