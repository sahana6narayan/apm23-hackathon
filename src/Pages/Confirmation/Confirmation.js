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
import Image from './confirmation.png'; // another image is defined here using file path
import './Confirmation.css';

function Confirmation() {
    const [stepState, setStepState] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    let navigate = useNavigate();
    const buttonStyle = {
        marginTop: '380px', // Adjust the margin-top value as needed
        marginLeft: '-190px',
        padding: '25px 300px',
        backgroundColor: 'transparent'
      };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' | event.key === ' ') {
            navigate('/pickupcode')
        }
      };

    return (
        <div className='SearchResult page' onKeyDown={handleKeyDown} tabIndex={0}>
            <MockScreenshot imageUrl={Image}> 
            <Button size={SIZE.large} onClick={() => { navigate(`/pickupcode`) }} style={buttonStyle}>
                    {/*make sure navigate param matches path defined in App.js*/}    
            </Button>
            </MockScreenshot>
        </div>
    );
}

export default Confirmation;