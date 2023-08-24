// Lib imports
import React, { useState } from 'react';
// Random imports from Base UI
import { Combobox } from "baseui/combobox";
import { useNavigate } from "react-router-dom";
import { Button, SIZE } from "baseui/button";

// Local imports
import MockScreenshot from '../../Components/MockScreenshot/MockScreenshot.js';
import Image from './eventlist.png'; // another image is defined here using file path
import './EventList.css';

// this is some random bullshit combination of Base UI components and logic to demonstrate what a UI might look like in React
// since they don't care about backend you can probably just store persisting data in React state

function EventList() {
    const [stepState, setStepState] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    let navigate = useNavigate();
    const buttonStyle = {
        marginTop: '830px', // Adjust the margin-top value as needed
        marginLeft: '-200px',
        padding: '30px 200px',
        backgroundColor: 'transparent'
      };
    return (
        <div className='EventList page'>
            <MockScreenshot imageUrl={Image}> {/*each instance of MockScreenshot needs an image url passed like this */}
                <Button size={SIZE.large} onClick={() => { navigate(`/searchresult`) }} style={buttonStyle}>
                    {/*make sure navigate param matches path defined in App.js*/}
                                                 
                </Button>
            </MockScreenshot>
        </div>
    );
}

export default EventList;