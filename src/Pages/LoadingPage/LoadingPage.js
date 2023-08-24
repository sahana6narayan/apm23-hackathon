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
//import Image from './Schedules.png'; // another image is defined here using file path
import './LoadingPage.css';

// this is some random bullshit combination of Base UI components and logic to demonstrate what a UI might look like in React
// since they don't care about backend you can probably just store persisting data in React state

function LoadingPage() {
    let navigate = useNavigate();

    return (
        <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
}

export default LoadingPage;