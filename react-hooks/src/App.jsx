// Importing the necessary dependencies from React
import React, { useState, useEffect, useRef } from 'react';

// Importing styles from the external CSS file
import './App.css';

// Declaring the functional component App
const App = () => {
  // Using the useState hook to declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // useRef hook to create a persistent flag variable
  const alertFlag = useRef(0);

  // useEffect hook to perform side effects, in this case, displaying an alert when count is over 100
  useEffect(() => {
    if (count >= 100 && alertFlag.current === 0) {
      alert('The Count is Over 100');
      // Update the flag to ensure the alert is triggered only once
      alertFlag.current = 1;
    }
  }, [count]); // Dependency array ensures the effect runs when count changes

  // The return statement renders the JSX for your component
  return (
    <div>
      <div className='container-wrapper'>
        <div className='pack'>
          {/* Displaying the current value of the 'count' state */}
          <p>{count}</p>
          
          {/* Button with an onClick event that increments the 'count' state when clicked */}
          {/* onMouseEnter event also increments count */}
          <button
            onClick={() => setCount(count + 1)}
            onMouseEnter={() => setCount(count + 2)}
          >
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
}

// Exporting the App component as the default export
export default App;
