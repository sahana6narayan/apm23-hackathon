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


function SearchResult() {
    const [stepState, setStepState] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    let navigate = useNavigate();

    const handleSearch = (event) => {
/*         const simulatedResults = [
            'Home',
            'Recent',
            'Marina Green',
          ]; */

        if (event.key === 'Enter') {
            /* setSearchResults(simulatedResults); */
            navigate('/loadingpage')
            setTimeout(() => {
                navigate('/Schedules');
            }, 1000)
          }
    }; 

    return (
        <div className='SearchResult page'>
            <MockScreenshot imageUrl={Image}> {/*each instance of MockScreenshot needs an image url passed like this */}
            <div className="Search page">
            <div className="search-container">
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Where to?"
                onKeyDown ={handleSearch}  
            />
        </div>
        <div className="results-container">
            {searchResults.map((result, index) => (
            <div key={index} className="result-item">
                {result}
            </div>
            ))}
        </div>
        </div> 
            </MockScreenshot>
        </div>
    );
}

export default SearchResult;