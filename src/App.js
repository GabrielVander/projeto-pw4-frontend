import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/'>
                <MainPage/>
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
