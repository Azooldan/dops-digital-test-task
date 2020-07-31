import React from 'react';
import './App.css';
import Logo from './components/Logo';
import MainText from './components/MainText';
import EstimateBlock from './components/EstimateBlock';
import EvaluationTopics from './components/EvaluationTopics';

function App() {
  return (
    <div className="App">

        <div className="logo">
          <Logo />
        </div>

        <div className="main-text">
          <MainText />
        </div>
        
        <div className="main-content">
          <div className="estimate-block">
            <EstimateBlock/>
          </div>

          <div className="evaluation-topics">
            <EvaluationTopics/>
          </div>
        </div>

    </div>
  );
}

export default App;
