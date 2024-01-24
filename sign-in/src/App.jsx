import React from 'react'
import './App.css'



const App = () => {
  return (
    <div>
      <div className='sign-in-form-container'>
      <h1>Sign in</h1>
      
      <div className='remains'>
      
      <input type='id' placeholder='username' />
      <input type='id' placeholder='password' />
      </div>
      <div className='radio-buttons'>
      <label>
      <input type='radio' name='gender' value='male' />
      male
      </label>
      <label>
      <input type='radio' name='gender' value='female' />
      female
      </label>
      </div>
      <div className='button'>
      <button>submit</button>
      </div>
      </div>
    </div>
  )
}

export default App
