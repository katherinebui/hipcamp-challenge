import React from 'react';

const CampFeatureDetail = (props: { feature: Feature }) => {
  // const { title, presence, subfeatures } = props.feature;
  return <div className="details">{feature}</div>;
  // return <h1>{props.match.params.feature}</h1>;
};

export default CampFeatureDetail;
