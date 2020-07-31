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
      estimatedCost: 0,
      selectedTopics: [],
      scrollProgress: 0
    }
  }

  handleCardClick = (card, topic, isChecked) => {
    this.changeEstimationValue(card, topic, isChecked);
    this.setCheckedTopics(topic, isChecked);
  }

  setCheckedTopics = (topic, isChecked) => {
    
    // this.setState( ({selectedTopics}) => {
    //   if (selectedTopics.includes(parseInt(topic.id))) {
    //     return{
    //       selectedTopics: [...selectedTopics]
    //     }
    //   }

    //   // if this topic wasn`t selected before we have to add it id to selectedTopics
    //   if(isChecked) {
    //     return{
    //       selectedTopics: [...selectedTopics, parseInt(topic.id)]
    //     }
    //   } else {
    //     console.log(isChecked)
    //     return {
    //       selectedTopics: selectedTopics.filter(id => id !== topic.id)
    //     }
    //   }
    // })
  }

  setScrollProgress = (value) => {
    this.setState({
      scrollProgress: value
    })
  }

  changeEstimationValue = (card, topic, isChecked) => {
    this.setState( ({estimatedCost}) => {
      // calculating estimation value depends on card was checked or uncheked
      const valueToSet = isChecked ? estimatedCost += parseInt(card.price) : estimatedCost -= parseInt(card.price);
      return{
        estimatedCost: valueToSet
      }
    })
  }

  render() {
    const { estimatedCost, scrollProgress } = this.state;
    
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
          <EstimateBlock value={estimatedCost} scrollProgress={scrollProgress}/>
        </div>

        <div className="evaluation-topics">
          <EvaluationTopics handleCardClick={this.handleCardClick} setScrollProgress={this.setScrollProgress}/>
        </div>
      </div>

      </div>
    )
  }
}

