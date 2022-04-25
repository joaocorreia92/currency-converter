import React from 'react';
import './App.css';
import Converter from './components/Converter';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Currency Converter</h1>
      </header>
      <div className='line'>
        <Converter coinA="USD" coinB="BRL" />
        <Converter coinA="BRL" coinB="USD" />
      </div>
      <div className='line'>
        <Converter coinA="USD" coinB="BRL" />
        <Converter coinA="BRL" coinB="USD" />
      </div>
      <div className='line'>
        <Converter coinA="EUR" coinB="BRL" />
        <Converter coinA="BRL" coinB="EUR" />
      </div>
      <div className='line'>
        <Converter coinA="CAD" coinB="BRL" />
        <Converter coinA="BRL" coinB="CAD" />
      </div>
    </div>
  );
}

export default App;
