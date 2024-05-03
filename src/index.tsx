import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ROUTES } from './utils/constant';
import Collection from './pages/Collection';
import CreateCard from './pages/CreateCard';
import Navbar from './components/navbar';
import './style.css';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path={ROUTES.HOME} component={Collection} />
      <Route exact path={ROUTES.COLLECTION} component={Collection} />
      <Route exact path={ROUTES.CREATE_CARD} component={CreateCard} />
    </Switch>
  </Router>
);

render(<App />, document.getElementById('root'));
