import React from 'react';
import Greet from '../greet';
import './App.css';

function App() {
  return (
    <div className="App">
     <Greet>
       {(whom) => <span>Hello, {whom}</span>}
     </ Greet>
    </div>
  );
}

export default App;
