import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './pages/Others/MainPage';
import MainDashboardPage from './pages/Dashboard/MainDashboardPage';
import NotFoundPage from './pages/Others/404Page';

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
							<MainDashboardPage />
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
