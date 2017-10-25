import React from 'react';
import { render } from 'react-dom';
import CampFeaturesList from './CampFeaturesList';
import CampFeatureDetail from './CampFeatureDetail';
import FEATURES from '../camp_features';

const NotFound = () => <h1>404 Not found</h1>;

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <CampFeaturesList />
      </div>
    );
  }
}

export default App;
