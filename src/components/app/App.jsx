import React from 'react';
import Button from '../btn'
import Input from '../input'
import './App.css';

function App() {

  // const input = React.createRef();
  let input = null;

  const focusInput = () => {
    input.focus();
  }

  const setInput = (el) => {
    input = el;
  }

  return (
    <div className="App">
     <Button />
     <div>
       <Input ref={setInput} />
       <input type="button" value="Select input" onClick={focusInput} />
     </div>
    </div>
  );
}

export default App;
