import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './pages/Others/MainPage';
import MainDashboardPage from './pages/Dashboard/MainDashboardPage';
import NotFoundPage from './pages/Others/404Page';
import NewDocumentPage from './pages/Documents/NewDocumentPage';
import ViewDocumentPage from './pages/Documents/ViewDocumentPage';
import AllDocumentsPage from './pages/Documents/AllDocumentsPage';
import Document from './model/Document';

export const MOCK_DOCUMENTS = [
	new Document(1, 'Document 1', 'This is a mock document!!!!'),
	new Document(2, 'Document 2', 'This is a mock document!!!!'),
	new Document(3, 'Document 3', 'This is a mock document!!!!'),
	new Document(4, 'Document 4', 'This is a mock document!!!!'),
	new Document(5, 'Document 5', 'This is a mock document!!!!'),
	
];

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
						<Route path='/documents/new'>
							<NewDocumentPage />
						</Route>
						<Route path='/documents/:documentId' component={ViewDocumentPage} />
						<Route path='/documents'>
							<AllDocumentsPage documents={MOCK_DOCUMENTS}/>
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
