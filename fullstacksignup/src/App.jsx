import React, {useState} from 'react';
import './App.css';

const App = () => {
  

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');

  const buttonSubmitted = () => {
   event.preventDefault();
   axios.post('https://localhost:8081/signup', values)
      .then(res => {
        window.alert("Registered successfully");
        console.log("Registered Successfully");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className='container'>
        <h1>Sign Up</h1>
        <form>
          <div className='intro'><strong>username</strong></div>
          <input
            className='username'
            placeholder='Enter the email'
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className='intro'><strong>password</strong></div>
          <input
            className='password'
            placeholder='Enter the password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='radio-buttons'>
            <input type='radio' name='options'  value={username} onChange={() => setGender('Male')}></input>
            <label>Male</label>
            <input type='radio'  name='options'value={password} onChange={() => setGender('Female')}></input>
            <label>Female</label>
          </div>
          
        </form>
        <button className='submit' type='button' onClick={buttonSubmitted}>Submit</button>
      </div>
    </div>
  );
}

export default App;
