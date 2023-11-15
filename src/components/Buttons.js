import React from 'react';
import SingleButton from './SingleButton';
import ActionButton from './ActionButton';


const DIVIDE_SYMBOL = '\u00F7';

function Buttons(props) {

    return (
        <div className='buttons'>
            <div className='top-row'>
                <ActionButton buttonSymbol='AC' name='clear' {...props} />
                <ActionButton buttonSymbol='+/-' name='inverse' {...props} />
                <ActionButton buttonSymbol='%' name='percentage' {...props} />
                <ActionButton buttonSymbol={DIVIDE_SYMBOL} name='divide' {...props} />
            </div>
            <div className='top-row'>
                <SingleButton buttonSymbol='7' {...props} />
                <SingleButton buttonSymbol='8' {...props} />
                <SingleButton buttonSymbol='9' {...props} />
                <ActionButton buttonSymbol='x' name='multiply' {...props} />
            </div>
            <div className='top-row'>
                <SingleButton buttonSymbol='4' {...props} />
                <SingleButton buttonSymbol='5' {...props} />
                <SingleButton buttonSymbol='6' {...props} />
                <ActionButton buttonSymbol='-' name='subtract' {...props} />
            </div>
            <div className='top-row'>
                <SingleButton buttonSymbol='1' {...props} />
                <SingleButton buttonSymbol='2' {...props} />
                <SingleButton buttonSymbol='3' {...props} />
                <ActionButton buttonSymbol='+' name='sum' {...props} />
            </div>
            <div className='top-row'>
                <SingleButton buttonSymbol='0' {...props} />
                <ActionButton buttonSymbol='.' name='decimal' {...props} />
                <ActionButton buttonSymbol='=' name='equals' {...props} />
            </div>
        </div>
    )   
}

export default Buttons;