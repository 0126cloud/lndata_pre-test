import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import TheHeader from "./components/TheHeader"
import TheMenu from "./components/TheMenu"
import Main from "./pages/Main"
import Detail from "./pages/Detail"
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
            <Route path="/detail/:name">
              <Detail />
            </Route>
            <Redirect to="/" />
          </Switch>
      </>
    </Router>
  );
}

export default App;
