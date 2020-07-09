import React from "react";
import Card from "react-bootstrap/Card";
import {BsFileEarmarkPlus} from "react-icons/bs";
import { motion } from "framer-motion"

function NewDocument() {
    return (
        <>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Card bg='success'>
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