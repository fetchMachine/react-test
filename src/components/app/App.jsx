import React, { Component } from 'react';
import Greet from '../greet';
import Menu from '../menu';
import { LanguageContextProvider } from '../ctx';
import './App.css';


export default class App extends Component {

  state = {
    lang: 'eng'
  };

  changeLang = (e) => {
    const lang = e.target.value;
    this.setState({ lang });
  }

  render() {
    return (
      <div className="App">
        <LanguageContextProvider value={this.state.lang}>
          <Greet />
          <Menu onChange={this.changeLang}/>
        </LanguageContextProvider>
      </div>
    );
  }
}
