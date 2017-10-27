import React from 'react';
import { Link } from 'react-router-dom';
import CampFeatureListItem from './CampFeatureListItem';
import { array }from 'prop-types';

class CampFeatureDetail extends React.Component {
  render() {

    const renderSubfeatures = this.props.subfeatures.length === 0
      ? <b id="noSF">No other features available</b>
      : this.props.subfeatures.map((subf, index) => <CampFeatureListItem key={index} {...subf} />)

    return (
      <div>
        <ul>
          {renderSubfeatures}
        </ul>
      </div>
      )
    }
}

CampFeatureDetail.propTypes = {
  subfeatures: array.isRequired
};

export default CampFeatureDetail;
