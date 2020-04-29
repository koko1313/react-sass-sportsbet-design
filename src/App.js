import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = props => {
  return (
    <>
      <Navbar />
      <div className="container root">
        {props.children}
      </div>
      <Footer />
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
