import React from 'react';
// import './SingleButtonStyle.css';

function ActionButton({ singleValueOperations, name, buttonSymbol, input, setInputArray, setInput, handleEquals }) {

    /* --- Handles Operation --- 
    * Checks type of math symbol inputted
    and performs relevant procedure
    */

    const handleOperation = () => {
        if (['clear', 'inverse', 'percentage', 'decimal'].includes(name)){
            singleValueOperations[name]();
        }

        if (['multiply', 'divide', 'subtract', 'sum'].includes(name)){
            setInputArray((prev) => [...prev, input, name]);
            setInput(0);
        }

        if (name === 'equals'){
            handleEquals();
        }
    }

    return (
        <button className='singleButton'
            type='button'
            onClick={handleOperation}
        >
            {buttonSymbol}
        </button>
    )
}

export default ActionButton;