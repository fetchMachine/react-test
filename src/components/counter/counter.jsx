import React, { Component } from 'react';
import './counter.css';


export default class Counter extends Component {

  componentDidMount() {
    this.unsubscribe = window.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    if (typeof this.unsubscribe === 'function') {
      this.unsubscribe();
    }
  }

  inc = () => window.store.dispatch({ action: 'inc' });
  dec = () => window.store.dispatch({ action: 'dec' });
  reset = () => window.store.dispatch({ action: 'reset' });

  render() {
    const { count } = window.store.state;

    return (
      <div className="counter">
        <div className="counter__value">{count}</div>
        <div className="counter__btns-wrapper d-flex justify-content-around">
          <input className="btn btn-primary" type="button" value="+" onClick={this.inc} />
          <input className="btn btn-primary" type="button" value="Reset" onClick={this.reset} />
          <input className="btn btn-primary" type="button" value="-" onClick={this.dec} />
        </div>
      </div>
    );
  }
}
