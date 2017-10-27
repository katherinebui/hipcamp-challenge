import React from 'react';
import { render } from 'react-dom';
import CampFeaturesList from './CampFeaturesList';
import CampFeatureDetail from './CampFeatureDetail';
import FEATURES from '../camp_features';
import { array }from 'prop-types';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      features: []
    };
  }

  componentWillMount() {
    this.setState({
      features: FEATURES
    });
  }

  render() {
    return (
      <div className="app">
        <CampFeaturesList features={this.state.features} />
      </div>
    );
  }
}

App.propTypes = {
  features: array
};

export default App;
