import React from 'react';
import { Link } from 'react-router-dom';
import CampFeatureListItem from './CampFeatureListItem';

class CampFeatureDetail extends React.Component {
  render() {
    const { title, presence, subfeatures } = this.props.feature;

    return (
      <div className="details">
        {subfeatures.length === 0 ? (
          <h3>No Subfeatures</h3>
        ) : (
          subfeatures.map(subf => {
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

// iterate to get single feature b/c feature = ALL features right now
// pass in
