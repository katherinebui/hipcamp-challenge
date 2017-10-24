import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CampFeaturesList from './CampFeaturesList';
import CampFeatureDetail from './CampFeatureDetail';

const NotFound = () => <h1>404 Not found</h1>;

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CampFeaturesList} />
        <Route path="/:feature" component={CampFeatureDetail} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
);

render(<App />, document.querySelector('.features'));
