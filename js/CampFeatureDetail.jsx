import React from 'react';
import { Link } from 'react-router-dom';

const CampFeatureDetail = (props: { feature: Feature }) => {
  const { title, presence, subfeatures } = props.feature;

  const renderSubfeatures = () => {
    if (subfeatures) {
      subfeatures.map(sf => {
        console.log(sf);
      });
    }
  };

  return (
    <div className="details">
      <header>
        <h1>{title}</h1>
        {renderSubfeatures()}
      </header>
    </div>
  );
};

export default CampFeatureDetail;
