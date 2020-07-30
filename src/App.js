import React from 'react';
import './App.css';
import Logo from './components/Logo';
import MainText from './components/MainText';
import EstimateBlock from './components/EstimateBlock';

function App() {
  return (
    <div className="App">
        <Logo/>
        <MainText/>
        <EstimateBlock/>
    </div>
  );
}

export default App;
