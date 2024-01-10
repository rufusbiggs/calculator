import React from 'react';
// import './SingleButtonStyle.css';

function ActionButton({ singleValueOperations, name, buttonSymbol, input, setInputArray, setInput, handleEquals, inputArray }) {

    /* --- Handles Operation --- 
    * Checks type of math symbol inputted
    and performs relevant procedure
    */

    const handleOperation = () => {
        if (['clear', 'inverse', 'percentage', 'decimal'].includes(name)){
            singleValueOperations[name]();
        }

        if (['multiply', 'divide', 'subtract', 'sum'].includes(name)){
            if (inputArray.length === 1){
                setInputArray((prev) => [...prev, name]);
                setInput(0);
            }
            else {
                setInputArray((prev) => [...prev, input, name]);
                setInput(0);
            }
        }

        if (name === 'equals'){
            handleEquals();
        }
    }

    return (
        <button id={name} className='singleButton'
            type='button'
            onClick={handleOperation}
        >
            {buttonSymbol}
        </button>
    )
}

export default ActionButton;