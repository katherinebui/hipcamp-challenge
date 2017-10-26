import CampFeatureListItem from './CampFeatureListItem';
import App from './App';
import Header from './Header';
import React from 'react';

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

export default CampFeatureList;
