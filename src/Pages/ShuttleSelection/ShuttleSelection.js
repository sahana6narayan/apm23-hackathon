// Lib imports
import React, { useState } from 'react';
// Random imports from Base UI
import { Button, SIZE } from "baseui/button";
import {
    ProgressSteps,
    Step
} from "baseui/progress-steps";
import { Combobox } from "baseui/combobox";
import { useNavigate } from "react-router-dom";

// Local imports
import MockScreenshot from '../../Components/MockScreenshot/MockScreenshot.js';
import Image from './shuttleselection.png'; // another image is defined here using file path
import './ShuttleSelection.css';
import Counter from './counter.js';


// this is some random bullshit combination of Base UI components and logic to demonstrate what a UI might look like in React
// since they don't care about backend you can probably just store persisting data in React state



  
function ShuttleSelection() {
    const [stepState, setStepState] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    let navigate = useNavigate();
    const buttonStyle = {
        marginTop: '695px', // Adjust the margin-top value as needed
        marginLeft: '-150px',
        padding: '30px 250px',
        //backgroundColor: 'transparent'
    }
    return (
        <div className='ShuttleSelection page'>
            <MockScreenshot imageUrl={Image}> {/*each instance of MockScreenshot needs an image url passed like this */}
            <Button size={SIZE.large} onClick={() => { navigate(`/confirmation`) }} style={buttonStyle}>
                    {/*make sure navigate param matches path defined in App.js*/}
            </Button>
            <Counter />
            </MockScreenshot>
        </div>
    );
}

export default ShuttleSelection;