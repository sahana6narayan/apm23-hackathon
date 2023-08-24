// Lib imports
import React, { useState } from 'react';
// Random imports from Base UI
import { Button } from "baseui/button";
import {
    ProgressSteps,
    Step
} from "baseui/progress-steps";
import { Combobox } from "baseui/combobox";
import { useNavigate } from "react-router-dom";

// Local imports
import MockScreenshot from '../../Components/MockScreenshot/MockScreenshot.js';
import Image from './searchresult.png'; // another image is defined here using file path
import './SearchResult.css';

// this is some random bullshit combination of Base UI components and logic to demonstrate what a UI might look like in React
// since they don't care about backend you can probably just store persisting data in React state

function SearchResult() {
    const [stepState, setStepState] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    let navigate = useNavigate();
    return (
        <div className='SearchResult page'>
            <MockScreenshot imageUrl={Image}> {/*each instance of MockScreenshot needs an image url passed like this */}
            </MockScreenshot>
        </div>
    );
}

export default SearchResult;