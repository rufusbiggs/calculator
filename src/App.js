import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Display from './components/Display';
import Buttons from './components/Buttons';


function App() {
  useEffect(() => {
    document.title = 'Simple Calculator';
  }, []);

  const [total, setTotal] = useState(0);
  const [input2, setInput2] = useState(0);
  const [display, setDisplay] = useState(0);

  const clear = () => {
    setTotal(0);
    setInput2(0);
    setDisplay(total);
  };

  const inverse = () => {
    const inv = total * -1;
    setTotal(invTotal);
    setDisplay(total);
  }

  const percentage = () => {
    const percTotal = total / 100;
    setTotal(percTotal);
    setDisplay(total);
  }

  const divide = () => {
    const divTotal = total / input2;
    setTotal(divTotal);
     
  }

  return (
    <div className="Calculator">
      <Display total={total} />
      <Buttons />
      
    </div>
  );
}

export default App;
