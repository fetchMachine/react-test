import React from 'react';
import Counter from '../counter';
import './app.css';
import '../../store/'

import Store, { reducer } from '../../store';
window.store = new Store(reducer, { count: 0 });

function App() {
  return (
    <div className="App">
     <Counter />
    </div>
  );
}

export default App;
