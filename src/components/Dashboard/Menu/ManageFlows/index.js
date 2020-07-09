import React from "react";
import Card from "react-bootstrap/Card";
import {BsGrid1X2} from "react-icons/bs";
import { motion } from "framer-motion"

function ManageFlows() {
    return (
        <>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Card bg='primary'>
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