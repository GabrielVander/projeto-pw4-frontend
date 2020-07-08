import React from 'react';
import './App.css';
import ExampleApp from "./components/ExampleApp";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App-header">
          <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <ExampleApp/>
                </Route>
            </Switch>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
