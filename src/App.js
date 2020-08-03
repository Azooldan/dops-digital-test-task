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
    const topicsPrices = {
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
    }

    this.state = {
      estimatedCost: 0,
      scrollProgress: 0,
      idChoseQuality: null,
      qualityPrice: 0,
      topicsPrices: topicsPrices
    }
  }
  
  handleQualityChoose = (topic, image) => {
    this.setState(prevState => {      
      return {
        idChoseQuality: image.id,
        topicsPrices: {                    
          ...prevState.topicsPrices,               
          [topic.id]: parseInt(image.price)    
        }
      }
    })
    this.calculateTotalPrice();
  }

  calculateTopicPrice = (topic, item, checked) => {
    this.setState(prevState => {
      const valueToSet = !checked ? prevState.topicsPrices[topic.id] + parseInt(-item.price) : prevState.topicsPrices[topic.id] + parseInt(item.price);
      
      return {
        topicsPrices: {                             // object that we want to update
          ...prevState.topicsPrices,                 // keep all other key-value pairs
          [topic.id]: valueToSet    // update the value of specific topic
        }
      }
    })
    this.calculateTotalPrice();
  }

  setScrollProgress = (value) => {
    this.setState({
      scrollProgress: value
    })
  }

  calculateTotalPrice = () => {
    const { estimatedCost, qualityPrice, topicsPrices } = this.state;
    let finalCost = estimatedCost + parseInt(qualityPrice);
    
    let topicsCost = 0;
    for (let i = 1; i < 7; i++) {
      topicsCost += topicsPrices[i]
    }
    return topicsCost + finalCost;
  }
  
  render() {
    const { scrollProgress, idChoseQuality, topicsPrices } = this.state;
    
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
            value={this.calculateTotalPrice()} 
            scrollProgress={scrollProgress}
            topicsPrices={topicsPrices}/>
        </div>

        <div className="evaluation-topics">
          <EvaluationTopics 
            setScrollProgress={this.setScrollProgress}
            idChoseQuality={idChoseQuality}
            topicsPrices={topicsPrices}
            handleQualityChoose={this.handleQualityChoose}
            calculateTopicPrice={this.calculateTopicPrice}
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

