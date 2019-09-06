import React from 'react';
import Counter from '../counter';
import './app.css';
import '../../store/'

import { createStore } from '../../store';
// import { createStore } from 'redux';
import { reducer } from '../../store';
window.store = createStore(reducer, { count: 0 });

function App() {
  return (
    <div className="App">
     <Counter />
    </div>
  );
}

export default App;
