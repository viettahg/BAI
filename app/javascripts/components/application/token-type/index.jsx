import React, {
  Component
} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

export default class TokenType extends Component {
  render() {
    return (
      <div
        className={classnames('token-type has-text-centered', { 'selected': this.props.selected })}
        onClick={this.props.onClick}>
        <h5 className=" titleAsset">{this.props.title}</h5>
        <img src={this.props.url} className='token-type__img'/>
        <div className="control has-text-centered">{`${this.props.price} Ξ`}</div>
      </div>
    );
  }
}

TokenType.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
