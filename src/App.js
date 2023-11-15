import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Display from './components/Display';
import Buttons from './components/Buttons';


function App() {
  useEffect(() => {
    document.title = 'Simple Calculator';
  }, []);

  /* --- Initialise States ---
    * inputArray > array of numbers and maths symbols e.g. [14, x, 2, +, 1]
    * input > either number of operator value
    * display > displays a number on screen 
  */

  const [inputArray, setInputArray] = useState([]);
  const [input, setInput] = useState(0);
  const [display, setDisplay] = useState(0);

  /* --- Single Value Operations ---
    Only requires one number to perform operation, 
    doesn't require adding to inputArray
  */

  const singleValueOperations = {
    clear() {
      setInputArray([]);
      setInput(0);
      setDisplay(0);
    },

    inverse() {
      const inv = input * -1;
      setInput(inv);
      setDisplay(inv);
    },

    percentage() {
      const percTotal = input / 100;
      setInput(percTotal);
      setDisplay(percTotal);
    },

    decimal() {
      // Check if value already has a decimal point
      if (!Number.isInteger(input) || typeof input === 'string'){
        return;
      }
      setInput(`${input}.`);
      setDisplay(`${input}.`);
    }
  }

  /* --- Complete *,/,+,- Operations ---
    Scans inputArray and performs operations 
    in correct order.
  */
  const handleEquals = () => {
    // Create new inputArray so not mutating our state and add latest input
    const operationArray = inputArray;
    operationArray.push(input);

    // Perform Multiplications
    console.log('doing some multiplication');
    let i = 0;
    while (i < operationArray.length){
      if (operationArray[i] === 'multiply'){
        const multiplyResult = operationArray[i-1] * operationArray[i+1];
        operationArray.splice(i-1, 3, multiplyResult);
      } else i++;
    }

    // Perform Division
    console.log('doing some division');
    i = 0;
    while (i < operationArray.length - 1){
      if (operationArray[i] === 'divide'){
        const multiplyResult = operationArray[i-1] / operationArray[i+1];
        operationArray.splice(i-1, 3, multiplyResult);
      } else i++;
    }

    // Perform Addition
    console.log('doing some addition');
    i = 0;
    while (i < operationArray.length - 1){
      if (operationArray[i] === 'sum'){
        const multiplyResult = operationArray[i-1] + operationArray[i+1];
        operationArray.splice(i-1, 3, multiplyResult);
      } else i++;
    } 

    // Perform Subtraction
    console.log('doing some subtraction');
    i = 0;
    while (i < operationArray.length - 1){
      if (operationArray[i] === 'subtract'){
        const multiplyResult = operationArray[i-1] - operationArray[i+1];
        operationArray.splice(i-1, 3, multiplyResult);
      } else i++;
    } 

    setDisplay(operationArray);
  }
  

  return (
    <div className="Calculator">
      <Display display={display} />
      <Buttons 
        setInputArray= {setInputArray}
        inputArray={inputArray}
        setInput={setInput} 
        input={input} 
        setDisplay={setDisplay} 
        display={display}
        singleValueOperations={singleValueOperations}
        handleEquals={handleEquals}
      />
      
    </div>
  );
}

export default App;
