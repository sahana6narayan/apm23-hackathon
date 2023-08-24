import React from 'react';
import { useNavigate } from "react-router-dom";
import './Home.css';

import { Button, SIZE } from "baseui/button";
import MockScreenshot from '../../Components/MockScreenshot/MockScreenshot.js';
import Image from './home_screenshot.png'; // an image is defined here using file path

function Home() {
    let navigate = useNavigate();
    const buttonStyle = {
        marginTop: '200px', // Adjust the margin-top value as needed
        marginLeft: '-170px',
        padding: '25px 100px',
        backgroundColor: 'transparent'
      };
    return (
        <div className='Home page'>
            <MockScreenshot imageUrl={Image}> {/*each instance of MockScreenshot needs an image url passed like this */}
                <Button size={SIZE.large} onClick={() => { navigate(`/eventlist`) }} style={buttonStyle}>
                    {/*make sure navigate param matches path defined in App.js*/}    
                </Button>
            </MockScreenshot>
        </div>
    );
}

export default Home;