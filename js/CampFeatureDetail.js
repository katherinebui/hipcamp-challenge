import React from 'react';
import { Link } from 'react-router-dom';
import CampFeatureListItem from './CampFeatureListItem';

class CampFeatureDetail extends React.Component {
  render() {
    const { title, presence, subfeatures } = this.props.feature;
    // const renderSubfeatures = () => {
    //   if (subfeatures) {
    //     subfeatures.map(sf => {});
    //   }
    // };
    // const subfeatures = this.props.features[0].subfeatures;
    // {
    //   subfeatures.length === 0 ? console.log('hello') : console.log('hi');
    // }

    return (
      <div className="details">
        {subfeatures.length === 0 ? (
          <h3>No Subfeatures</h3>
        ) : (
          subfeatures.map(sub => {
            return (
              <ul>
                <CampFeatureListItem key={sub.title} {...sub} />
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
