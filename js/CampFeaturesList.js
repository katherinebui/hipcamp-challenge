import CampFeatureListItem from './CampFeatureListItem';
import App from './App';
import Header from './Header';
import React from 'react';
import { array, boolean }from 'prop-types';

class CampFeatureList extends React.Component {
  render() {
  const campFeature = this.props.features.map((feature, index) => {
    return (
      <li key={index}><CampFeatureListItem {...feature} /></li>
    );
  });

    return (
      <div className="list">
        <Header />
          <ul>
            {campFeature}
          </ul>
      </div>
    );
  }
}

CampFeatureList.propTypes = {
  features: array.isRequired
};

export default CampFeatureList;
