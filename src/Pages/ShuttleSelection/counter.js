import React, { useState } from 'react';



const Counter = () => {
    const [count, setCount] = useState(0); // Initial count value is 0
  
    const increment = () => {
      setCount(count + 1); // Increase the count by 1
    };
  
    const decrement = () => {
      setCount(count - 1); // Decrease the count by 1
    };

    const counterContainerStyle= {
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '200px', 
        marginTop: '-165px', // Move the counter up by adjusting margin
        marginLeft: '220px',
        position: 'relative', 
    }
    const countStyle = {
        position: 'absolute',
        top: '-10%', // Vertically center the count
        center: '50%', // Position the count on the left side
        transform: 'translateY(-50%)', // Adjust to fully center the count
        fontSize: '20px',
      };
    
      const buttonStyle = {
        padding: '0',
        width: '30px',
        height: '30px',
        fontSize: '18px',
        borderRadius: '50%',
        margin: '0 20px',
        outline: 'none',
        fontFamily: 'Impact', 
      };

return (
        <div style={counterContainerStyle}>
          <button style={buttonStyle} onClick={decrement}>-</button>
          <p style={countStyle}>{count}</p>
          <button style={buttonStyle} onClick={increment}>+</button>
        </div>
      );
    };
    
    

    export default Counter;
