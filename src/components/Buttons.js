import React from 'react';
import SingleButton from './SingleButton';
import DoubleButton from './DoubleButton';

const divideSymbol='\u00F7';

function Buttons() {
    return (
        <div className='buttons'>
            <div className='top-row'>
                <SingleButton buttonSymbol='AC' />
                <SingleButton buttonSymbol='+/-' />
                <SingleButton buttonSymbol='%' />
                <SingleButton buttonSymbol={divideSymbol} />
            </div>
            <div className='top-row'>
                <SingleButton buttonSymbol='7' />
                <SingleButton buttonSymbol='8' />
                <SingleButton buttonSymbol='9' />
                <SingleButton buttonSymbol='x' />
            </div>
            <div className='top-row'>
                <SingleButton buttonSymbol='4' />
                <SingleButton buttonSymbol='5' />
                <SingleButton buttonSymbol='6' />
                <SingleButton buttonSymbol='-' />
            </div>
            <div className='top-row'>
                <SingleButton buttonSymbol='1' />
                <SingleButton buttonSymbol='2' />
                <SingleButton buttonSymbol='3' />
                <SingleButton buttonSymbol='+' />
            </div>
            <div className='top-row'>
                <DoubleButton buttonSymbol='0' />
                <SingleButton buttonSymbol='.' />
                <SingleButton buttonSymbol='=' />
            </div>
        </div>
    )   
}

export default Buttons;