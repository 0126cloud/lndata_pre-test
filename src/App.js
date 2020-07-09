import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import TheHeader from "./components/TheHeader"
import TheMenu from "./components/TheMenu"
import Main from "./pages/Main"
import './App.css';

function App() {
  return (
    <Router>
      <>
          <TheHeader />
          <TheMenu />
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
          </Switch>
      </>
    </Router>
  );
}

export default App;
