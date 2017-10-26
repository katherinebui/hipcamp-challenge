import CampFeatureListItem from './CampFeatureListItem';
import App from './App';
import Header from './Header';
import React from 'react';

class CampFeatureList extends React.Component {
  render() {
  const campFeature = this.props.features.map((feature, index) => {
    return (
      <ul>
        <li key={index}>
          <CampFeatureListItem {...feature} />
        </li>
      </ul>
    );
  });

    return (
      <div className="list">
        <Header />
        {campFeature}
      </div>
    );
  }
}

export default CampFeatureList;
