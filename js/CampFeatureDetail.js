import React from 'react';
import { Link } from 'react-router-dom';
import CampFeatureListItem from './CampFeatureListItem';

class CampFeatureDetail extends React.Component {
  render() {
    const { title, presence } = this.props.features;

    // const renderSubfeatures = () => {
    //   if (subfeatures) {
    //     subfeatures.map(sf => {

    //     });
    //   }
    // };
    const subfeatures = this.props.features[0].subfeatures;
    return (
      <div className="details">
        <h3>{title}</h3>
        {subfeatures.length === 0 ? console.log('hello') : console.log('hi')}
      </div>
    );
  }
}

export default CampFeatureDetail;

// iterate to get single feature b/c feature = ALL features right now
// pass in
