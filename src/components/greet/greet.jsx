import React from 'react';
import WithCtx from '../ctx';
import { LanguageContextConsumer } from '../ctx';

import './greet.css';

const Greet_ = ({ data: lang }) => {
  const greetingMap = {
    ru: 'Привет',
    eng: 'HI',
    fr: 'Bonjour ',
  };
  const greeting = greetingMap[lang];
  return (
    <p>{`${greeting}!`}</p>
  );
}

const Greet = WithCtx(Greet_, LanguageContextConsumer);

export default Greet;
