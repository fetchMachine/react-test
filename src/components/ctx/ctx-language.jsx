import React from 'react';

const LanguageContext = React.createContext('ru');
export const {
  Provider: LanguageContextProvider,
  Consumer: LanguageContextConsumer,
} = LanguageContext;

export default LanguageContext;
