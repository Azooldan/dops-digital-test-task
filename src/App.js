import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo';
import MainText from './components/MainText';
import EstimateBlock from './components/EstimateBlock';
import EvaluationTopics from './components/EvaluationTopics';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleCardClick(name) {
    console.log(name)
  }

  render() {
    return(
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
          <EvaluationTopics handleCardClick={this.handleCardClick}/>
        </div>
      </div>

      </div>
    )
  }
}

