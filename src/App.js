import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo';
import MainText from './components/MainText';
import EstimateBlock from './components/EstimateBlock';
import EvaluationTopics from './components/EvaluationTopics';
import Footer from './components/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estimatedCost: 0,
      selectedTopics: [],
      scrollProgress: 0,
      idChoseQuality: null,
      qualityPrice: 0
    }
  }

  handleCardClick = (card, topic, isChecked) => {
    this.changeEstimationValue(card, topic, isChecked);
    this.setCheckedTopics(topic, isChecked);
  }
  
  handleQualityChoose = (image) => {
    this.setState({
        idChoseQuality: image.id,
        qualityPrice: image.price
    })
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

  changeEstimationValue = (card, isChecked) => {
    this.setState( ({estimatedCost, qualityPrice}) => {
      // calculating estimation value depends on card was checked or uncheked
      let valueToSet = isChecked ? estimatedCost += parseInt(card.price) : estimatedCost -= parseInt(card.price);
      return{
        estimatedCost: valueToSet
      }
    })
  }

  render() {
    const { estimatedCost, scrollProgress, idChoseQuality, qualityPrice } = this.state;
    const finalCost = estimatedCost + parseInt(qualityPrice);

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
          <EstimateBlock 
            value={finalCost} 
            scrollProgress={scrollProgress}/>
        </div>

        <div className="evaluation-topics">
          <EvaluationTopics 
            handleCardClick={this.handleCardClick} 
            setScrollProgress={this.setScrollProgress}
            idChoseQuality={idChoseQuality}
            handleQualityChoose={this.handleQualityChoose}
            />
        </div>
      </div>

      <div>
        <Footer/>
      </div>

      </div>
    )
  }
}

