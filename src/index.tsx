import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Collection } from './pages/Collection';
import CreateCard from './pages/CreateCard';
import Navbar from './components/navbar';
import './style.css';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/collection" component={Collection} />
      <Route exact path="/create-card" component={CreateCard} />
    </Switch>
  </Router>
);

render(<App />, document.getElementById('root'));
