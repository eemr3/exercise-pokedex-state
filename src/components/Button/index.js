import React, { Component } from 'react';

import './Button.css';

class Button extends Component {
  render() {
    const { onClick, children, disable, className } = this.props;
    return (
      <button onClick={onClick} disabled={disable} className={className}>
        {children}
      </button>
    );
  }
}

export default Button;
