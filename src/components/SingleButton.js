import React from 'react';
// import './SingleButtonStyle.css';

function SingleButton({ name, buttonSymbol, input, setInput, setDisplay, inputArray }) {

    const handleNumberPress = () => {
        const numberValue = Number(buttonSymbol);
        if (input === 0){
            setInput(numberValue);
            setDisplay(numberValue);
        }
        else {
            const calcArray = [input, numberValue];
            const inputJoined = Number(calcArray.join(''));
            setInput(inputJoined);
            setDisplay(inputJoined);
        }

    }

    return (
        <button className='singleButton' id={name}
            type='button'
            onClick={handleNumberPress}
        >
            {buttonSymbol}
        </button>
    )
}

export default SingleButton;