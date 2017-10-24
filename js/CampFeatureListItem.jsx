import React from 'react';
import css from '../public/style.css';
import { Link } from 'react-router-dom';

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
        <Link to={`/${this.props.title}`}>{this.props.title}</Link>
        {this.renderImage()}
      </div>
    );
  }
}

export default CampFeatureListItem;
