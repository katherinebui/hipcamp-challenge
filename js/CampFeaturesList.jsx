import React from 'react';
import FEATURES from '../camp_features';

const CampFeaturelist = () => <div className="cf-list">{FEATURES.map(feature => <h3>{feature.title}</h3>)}</div>;

export default CampFeaturelist;
