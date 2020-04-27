import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import Navbar from './components/Navbar';

const Layout = props => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        {props.children}
      </div>
    </>
  )
}


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Layout>
              <Home/>
            </Layout>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
