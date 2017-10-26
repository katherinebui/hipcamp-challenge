import CampFeatureListItem from './CampFeatureListItem';
import App from './App';
import Header from './Header';
import React from 'react';

const CampFeatureList = props => {
  const campFeature = props.features.map(feature => {
    return (
      <li>
        <CampFeatureListItem key={feature.title} {...feature} />
      </li>
    );
  });
  return (
    <div className="list">
      <Header />
      {campFeature}
    </div>
  );
};
export default CampFeatureList;
