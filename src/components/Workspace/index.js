import React, { useState, useEffect } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
// import WorkspaceItem from './WorkspaceItem';
import WorkspaceForm from "./WorkspaceForm";
import './styles.css';
import { IconContext } from "react-icons";
import { BsTrash, BsGrid1X2, BsPen } from 'react-icons/bs';
import { WORKSPACE_SELECTED } from '../../../src/topics/workspaces';
import {FcPlus} from 'react-icons/fc';
import {motion} from 'framer-motion'; 
import { API_ENDPOINT } from '../../../src/const';
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import PubSub from 'pubsub-js';
import axios from 'axios';

function ViewWorkspace() {
	const [workspaceList, setWorkspaceList] = useState({});
	const [isAdding, setIsAdding] = useState({status: false});
	const [isUpdating, setIsUpdating] = useState({status: false});
	const [isDeleting, setIsDeleting] = useState({status: false});
	const history = useHistory();

	const handleDelete = async (e) => {
		let workspaceId = e.currentTarget.id;

		setIsDeleting({status: true, id: workspaceId});
		await axios
			.delete(`${API_ENDPOINT}/workspaces/${workspaceId}`);
		setIsDeleting({status: true})
	}

	const handleWillUpdate = (e) => {
		let workspaceId = e.currentTarget.id;
		setIsUpdating({status: true, id: workspaceId})
	}

	function handleSelect(props) {
		history.push('/dashboard');
		PubSub.subscribe(WORKSPACE_SELECTED, props);
	}

    function handleCancelAdd() {
		setIsAdding({status: false})
	}
	
	function handleCancelUpd(){
		setIsUpdating({status: false})		
	}

    function addWorkspace() {
		setIsAdding({status: true})
    }

    async function handleSubmitAdd(values) {
        await axios
			.post(`${API_ENDPOINT}/workspaces`, values);
		setIsAdding({status: false})
	}
	
	async function handleSubmitUpd(values) {
        await axios
			.put(`${API_ENDPOINT}/workspaces/${isUpdating.id}`, values);
		setIsUpdating({status: false});
    }

	useEffect(() => {
		axios.get(`${API_ENDPOINT}/workspaces/`).then((workspaces) => {
			setWorkspaceList(workspaces);
		});

	}, [isUpdating, isAdding, isDeleting])

	return (
		<>
			<header className='header'>
				<h2>
					Select a workspace:
				</h2>
			</header>
			<CardDeck>
				{
					workspaceList.data
						? workspaceList.data.map((workspaceItem, index) => {
							return (
								<div className="workspace-item-container" key={index}>
									{
											(isUpdating.status && isUpdating.id === workspaceItem._id)
												?   ""
												:	<div className="icon-container"  >
														<div id={workspaceItem._id} onClick={(e) => handleDelete(e)}>
															<IconContext.Provider value={{ className: "delete-workspace-icon" }} >
																<BsTrash />
															</IconContext.Provider>
														</div>
														<div id={workspaceItem._id} onClick={(e) => handleWillUpdate(e)}>
															<IconContext.Provider value={{ className: "update-workspace-icon" }} >
																<BsPen />
															</IconContext.Provider>
														</div>
													</div>
									}
									{
										(isUpdating.status && isUpdating.id === workspaceItem._id)
											?   <WorkspaceForm
													handleSubmit={handleSubmitUpd}
													handleCancel={handleCancelUpd} />

											:	<Card className="workspace-card" bg="secondary" onClick={(e) => handleSelect(workspaceItem)}>
													<Card.Header>
														{workspaceItem.name}
													</Card.Header>
													<Card.Body>
														<BsGrid1X2 size={100} />
													</Card.Body>
												</Card>
									}
								</div>
							)
						})
						: "Loading..."
				}

				<motion.div whileHover={{
					scale: 1.1
				}}>
					<Card className="workspace-card" bg="dark">
						<Card.Body className="new-workspace-card">
							{
								(isAdding.status === false)
									? <div onClick={addWorkspace}>
										<IconContext.Provider
											value={{
												size: "50px",
												textAlign: "center"
											}}>
											<FcPlus />
										</IconContext.Provider>
									</div>

									: <WorkspaceForm
										handleSubmit={handleSubmitAdd}
										handleCancel={handleCancelAdd} />
							}
						</Card.Body>
					</Card>
				</motion.div>

			</CardDeck>
		</>
	);
}

export default ViewWorkspace;