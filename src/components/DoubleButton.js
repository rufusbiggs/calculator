import React from 'react';

function DoubleButton(props) {
    return (
        <button className='doubleButton'
            type='button'
        >
            {props.buttonSymbol}
        </button>
    )
};

export default DoubleButton;