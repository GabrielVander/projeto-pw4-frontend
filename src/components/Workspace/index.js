import React, { useState, useEffect, useCallback } from 'react';
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
	const [isAdding, setIsAdding] = useState(false);
	const [isUpdating, setIsUpdating] = useState({status: false});
	const history = useHistory();

	const getWorkspaces = async () => {
		let workspaces = await axios
			.get(`${API_ENDPOINT}/workspaces/`);

		return workspaces
	}

	const renderWorkspaces = async () => {
		await getWorkspaces().then((workspaces) => {
			setWorkspaceList(workspaces);
		});
	}

	const handleDelete = async (e) => {
		let workspaceId = e.currentTarget.id;
		await axios
			.delete(`${API_ENDPOINT}/workspaces/${workspaceId}`);

		renderWorkspaces();
		return true;
	}

	const handleWillUpdate = (e) => {
		let workspaceId = e.currentTarget.id;
		setIsUpdating({status: true, id: workspaceId})
	}

	function handleSelect(props) {
		history.push('/dashboard');
		PubSub.subscribe(WORKSPACE_SELECTED, props);
	}

    const toggle = useCallback(() => {
        setIsAdding(!isAdding)
    }, [isAdding, setIsAdding]);

    function handleCancelAdd() {
        toggle();
	}
	
	function handleCancelUpd(){
		setIsUpdating({status: false})		
	}

    function addWorkspace() {
        toggle();
    }

    async function handleSubmitAdd(values) {
        await axios
			.post(`${API_ENDPOINT}/workspaces`, values);
		toggle();
		renderWorkspaces();
	}
	
	async function handleSubmitUpd(values) {
        await axios
			.put(`${API_ENDPOINT}/workspaces/${isUpdating.id}`, values);
		setIsUpdating({status: false});
		renderWorkspaces();
    }

	useEffect(() => {
		renderWorkspaces();
	}, [])

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
									{/* <WorkspaceItem name={workspaceItem.name} /> */}
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
				{/* <WorkspaceNew></WorkspaceNew> */}

				<motion.div whileHover={{
					scale: 1.1
				}}>
					<Card className="workspace-card" bg="dark">
						<Card.Body className="new-workspace-card">
							{
								(isAdding === false)
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