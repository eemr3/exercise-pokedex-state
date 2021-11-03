import React, { Component } from 'react';

import './Button.css';

class Button extends Component {
  render() {
    const { onClick, children } = this.props;
    return (
      <button onClick={onClick} className="pokeButton">
        {children}
      </button>
    );
  }
}

export default Button;
