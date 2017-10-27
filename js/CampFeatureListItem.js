import React from 'react';
import { Link } from 'react-router-dom';
import CampFeatureDetail from './CampFeatureDetail';
import style from '../public/style.scss';
import { string, array, bool }from 'prop-types';

class CampFeatureListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      active: !this.state.active
    });
  }

  renderImage() {
    if (this.props.presence) {
      return <img src="images/yes.png" />;
    } else {
      return <img src="images/no.png" />;
    }
  }

  renderDetail() {
    if (this.state.active) {
      return (
        <CampFeatureDetail subfeatures={this.props.subfeatures} />
      );
    }
  }

  render() {
    return (
      <div className="cf-list-item">
        <button
          className="button"
          onClick={() => {
            this.handleClick();
          }}>
          {this.props.title}
        </button>
        {this.renderImage()}
        {this.renderDetail()}
      </div>
    );
  }
}

CampFeatureListItem.propTypes = {
  title: string.isRequired,
  presence: bool.isRequired,
  subfeatures: array
};

export default CampFeatureListItem;
