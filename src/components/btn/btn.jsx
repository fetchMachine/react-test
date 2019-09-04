import React, { Component } from 'react';
import './btn.css';

export default class Button extends Component {

  input = React.createRef();

  focusInput = () => {
    this.input.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.input} />
        <input type="button" value="Input Selector" onClick={this.focusInput} />
      </div>
    );
  }
}
