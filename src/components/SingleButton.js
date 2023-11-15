import React from 'react';
// import './SingleButtonStyle.css';

function SingleButton({ buttonSymbol, input, setInput, setDisplay }) {

    const handleNumberPress = () => {
        const numberValue = Number(buttonSymbol);
        if (input === 0){
            setInput(numberValue);
            setDisplay(numberValue);
        }
        else {
            const inputArray = [input, numberValue];
            const inputJoined = Number(inputArray.join(''));
            setInput(inputJoined);
            setDisplay(inputJoined);
        }

    }

    return (
        <button className='singleButton'
            type='button'
            onClick={handleNumberPress}
        >
            {buttonSymbol}
        </button>
    )
}

export default SingleButton;