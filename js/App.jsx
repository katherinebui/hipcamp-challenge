import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import CampFeaturesList from './CampFeaturesList';
import CampFeatureDetail from './CampFeatureDetail';
import FEATURES from '../camp_features';

const NotFound = () => <h1>404 Not found</h1>;

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CampFeaturesList} />
        <Route
          path="/:feature"
          component={(props: { match: Match }) => {
            const selectedFeature = FEATURES.find(
              feature => props.match.params.feature.toLowerCase() === feature.title.toLowerCase()
            );
            console.log(selectedFeature);
            return <CampFeatureDetail feature={selectedFeature} {...props} />;
          }}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
);

render(<App />, document.querySelector('.features'));
