import React, { Component } from 'react';
import { LanguageContext } from '../ctx';
import './menu.css';

export default class Menu extends Component {

  static contextType = LanguageContext;

  languageMap = {
    ru: {
      title: 'Меню'
    },
    eng: {
      title: 'Menu'
    },
    fr: {
      title: 'Le Menu'
    }
  };

  render() {
    const lang = this.context;
    const { title } = this.languageMap[lang];
    return (
      <div>
        <p>{title}</p>
        <select value={lang} onChange={this.props.onChange}>
          <option value="ru">Русский</option>
          <option value="eng">Английский</option>
          <option value="fr">Французский</option>
        </select>
      </div>
    );
  }

}
