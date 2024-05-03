import React, { Suspense, lazy } from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ROUTES } from './utils/constant';
import LoadingIndicator from './components/loader';
import Navbar from './components/navbar';
import './style.css';

const Collection = lazy(() => import('./pages/Collection'));
const CreateCard = lazy(() => import('./pages/CreateCard'));

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Suspense fallback={<LoadingIndicator />}>
        <Route exact path={ROUTES.HOME} component={Collection} />
        <Route exact path={ROUTES.COLLECTION} component={Collection} />
        <Route exact path={ROUTES.CREATE_CARD} component={CreateCard} />
      </Suspense>
    </Switch>
  </Router>
);

render(<App />, document.getElementById('root'));
