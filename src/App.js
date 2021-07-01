import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './components/pages/AboutUs';
import Shop from './components/pages/Shop';
import SignUp from './components/pages/SignUp';
import Form from './components/Form';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About-Us' component={AboutUs} />
          <Route path='/shop' component={Shop} />
          <Route path='/SignUp' component={SignUp} />
          <Route path='/Form' component={Form} />
        </Switch>
      </Router>
    </>
  );
}

export default App;