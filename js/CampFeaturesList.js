import CampFeatureListItem from './CampFeatureListItem';
import App from './App';
import Header from './Header';
import React from 'react';

const CampFeatureList = props => {
  const campFeature = props.features.map(feature => {
    return <CampFeatureListItem key={feature.title} {...feature} />;
  });
  return (
    <div>
      <Header />
      <ul className="list">{campFeature}</ul>
    </div>
  );
};
export default CampFeatureList;
