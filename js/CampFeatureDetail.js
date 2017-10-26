import React from 'react';
import { Link } from 'react-router-dom';
import CampFeatureListItem from './CampFeatureListItem';

class CampFeatureDetail extends React.Component {
  render() {
    return (
      <div className="details">
        {this.props.subfeatures.length === 0 ? (
          <h3>No Subfeatures</h3>
        ) : (
          this.props.subfeatures.map(subf => {
            return (
              <ul>
                <CampFeatureListItem key={subf.title} {...subf} />
              </ul>
            );
          })
        )}
      </div>
    );
  }
}
export default CampFeatureDetail;
