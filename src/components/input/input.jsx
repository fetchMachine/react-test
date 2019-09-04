import React from 'react';
import './input.css';

const Input = React.forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

export default Input;
