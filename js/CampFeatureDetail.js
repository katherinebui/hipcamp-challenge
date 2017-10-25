import React from 'react';
import { Link } from 'react-router-dom';

class CampFeatureDetail extends React.Component {
  render() {
    const { title, presence, subfeatures } = this.props.feature;

    const renderSubfeatures = () => {
      if (subfeatures) {
        subfeatures.map(sf => {
          return { sf };
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
  }
}

export default CampFeatureDetail;
