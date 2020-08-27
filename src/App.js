import React from 'react';
import './App.css';

import MainPage from './pages/Others/MainPage';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Workspace from './pages/Workspace/WorkspaceList';
import MainDashboardPage from './pages/Dashboard/MainDashboardPage';
import NotFoundPage from './pages/Others/404Page';
import NewDocumentPage from './pages/Documents/NewDocumentPage';
import ViewDocumentPage from './pages/Documents/ViewDocumentPage';
import AllDocumentsPage from './pages/Documents/AllDocumentsPage';

import NewLoginPage from './pages/User/loginPage';
import NewRegisterPage from './pages/User/registerPage';
import NewEmailConfirmationPage from './pages/User/emailConfirmationPage';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<div className="App-header">
					<Switch>
						<Route exact path='/'>
							<Redirect to={'/dashboard'}/>
						</Route>
						<Route path='/workspaces'>
							<Workspace/>
						</Route>
						<Route path='/dashboard'>
							<MainDashboardPage/>
						</Route>
						<Route path='/documents/new'>
							<NewDocumentPage/>
						</Route>
						<Route path='/user/loginPage'>
							<NewLoginPage/>
						</Route>
						<Route path='/user/registerPage'>
							<NewRegisterPage/>
						</Route>
						<Route path='/user/emailConfirmationPage'>
							<NewEmailConfirmationPage/>
						</Route>
						<Route path='/documents/:documentId' component={ViewDocumentPage} />
						<Route path='/documents'>
							<AllDocumentsPage />
						</Route>
						<Route path='*'>
							<NotFoundPage/>
						</Route>
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
