import React from 'react';
import FEATURES from '../camp_features';
import CampFeatureListItem from './CampFeatureListItem';

const CampFeaturelist = () => (
  <div className="cf-list">{FEATURES.map(feature => <CampFeatureListItem feature={feature} />)}</div>
);

export default CampFeaturelist;
