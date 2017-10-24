import React from 'react';
import css from '../public/style.css';

class CampFeatureListItem extends React.Component {
  renderImage() {
    if (this.props.presence) {
      return <img src="images/yes.png" />;
    } else {
      return <img src="images/no.png" />;
    }
  }

  render() {
    return (
      <div className="cf-list-item">
        {this.props.title}
        {this.renderImage()}
      </div>
    );
  }
}

export default CampFeatureListItem;
