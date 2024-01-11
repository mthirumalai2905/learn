import './App.css'
import axios from 'axios'
import { useState } from 'react'
import React from 'react'

const App = () => {
    const [quote, setQuote] = useState('');
    const getQuote = async () =>{
        axios.get('https://api.quotable.io/random')
        .then(res => {
           console.log(res.data.content);
           setQuote(res.data.content)
        }).catch(err => {
           console.log(err);
        })
    }
  return (
    <div className='App'>
        <button onClick={getQuote}>get a Quote
        </button> 
        <p id='tag1'>{quote}</p> 
    </div>
  );
}

export default App
