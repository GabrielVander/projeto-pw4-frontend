import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './pages/Others/MainPage';
import MainDashboardPage from './pages/Dashboard/MainDashboardPage';
import NotFoundPage from './pages/Others/404Page';
import NewDocumentPage from './pages/Documents/NewDocumentPage';
// User Pages Imports
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
							<MainPage/>
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
