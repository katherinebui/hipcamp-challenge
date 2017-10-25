import FEATURES from '../camp_features';
import CampFeatureListItem from './CampFeatureListItem';
import Header from './Header';
import React from 'react';

const CampFeatureList = () => (
  <div className="cf-list">
    <Header />
    {FEATURES.map(feature => <CampFeatureListItem key={feature.title} {...feature} />)}
  </div>
);

export default CampFeatureList;
