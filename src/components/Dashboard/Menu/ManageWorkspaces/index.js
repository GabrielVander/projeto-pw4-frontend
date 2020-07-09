import React from "react";
import Card from "react-bootstrap/Card";
import {BsFolder} from "react-icons/bs";
import { motion } from "framer-motion"

function ManageWorkspaces() {
    return (
        <>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Card bg='danger'>
                    <Card.Header>Manage workspaces</Card.Header>
                    <Card.Body>
                        <BsFolder size={50}/>
                    </Card.Body>
                </Card>
            </motion.div>
        </>
    );
}

export default ManageWorkspaces;