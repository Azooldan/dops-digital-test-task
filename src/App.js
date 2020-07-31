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
      estimatedCost: 0
    }
  }

  handleCardClick = (card, isChecked) => {
    this.changeEstimationValue(card, isChecked);
  }

  changeEstimationValue = (card, isChecked) => {
    this.setState( ({estimatedCost}) => {
      // calculating estimation value depends on card was checked or uncheked
      const valueToSet = isChecked ? estimatedCost += parseInt(card.price) : estimatedCost -= parseInt(card.price);
      return{
        estimatedCost: valueToSet
      }
    })
  }

  render() {
    const { estimatedCost } = this.state;

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
          <EstimateBlock value={estimatedCost}/>
        </div>

        <div className="evaluation-topics">
          <EvaluationTopics handleCardClick={this.handleCardClick}/>
        </div>
      </div>

      </div>
    )
  }
}

