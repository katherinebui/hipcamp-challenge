import React from 'react';
import { render } from 'react-dom';
import CampFeaturesList from './CampFeaturesList';
import CampFeatureDetail from './CampFeatureDetail';
import FEATURES from '../camp_features';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      features: []
    };
  }

  componentDidMount() {
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

export default App;
