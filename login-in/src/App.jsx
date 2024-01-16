import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <div className='login-container'>
        <h1>Login</h1>
        <div className='input'>
          <input type='text' placeholder='username' />
          <input type='password' placeholder='password' />
        </div>
        <div className='radio'>
          <label>
            <input type='radio' value='gender' name='male' />
            Male
          </label>
          <label>
            <input type='radio' value='gender' name='male' />
            Female
          </label>
        </div>
        <div className='button'>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
