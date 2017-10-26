import React from 'react';
import { Link } from 'react-router-dom';
import CampFeatureListItem from './CampFeatureListItem';

class CampFeatureDetail extends React.Component {
  render() {
    return (
      <div className="details">
        {this.props.subfeatures.length === 0 ? (
          <b id="noSF">No subfeatures</b>
        ) : (
          this.props.subfeatures.map((subf, index) => {
            return (
              <ul>
                <li key={index} >
                  <CampFeatureListItem {...subf} />
                </li>
              </ul>
            );
          })
        )}
      </div>
    );
  }
}
export default CampFeatureDetail;
