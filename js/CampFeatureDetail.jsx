import React from 'react';

const CampFeatureDetail = (props: { feature: Feature }) => {
  const { title, presence, subfeatures } = props.feature;
  return (
    <div className="details">
      <header>
        <h1>{title}</h1>
      </header>
    </div>
  );
};

export default CampFeatureDetail;
