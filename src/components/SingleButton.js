import React from 'react';
// import './SingleButtonStyle.css';

function SingleButton(props) {
    return (
        <button className='singleButton'
            type='button'
            // onClick={buttonAction}
        >
            {props.buttonSymbol}
        </button>
    )
}

export default SingleButton;