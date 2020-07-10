import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './pages/MainPage';
import DashboardPage from './pages/DashboardPage';

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
							<DashboardPage />
						</Route>
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
