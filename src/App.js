import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo';
import MainText from './components/MainText';
import EstimateBlock from './components/EstimateBlock';
import EvaluationTopics from './components/EvaluationTopics';
import Footer from './components/Footer';
import Comments from './components/Comments';

export default class App extends Component {
  constructor(props) {
    super(props);
    const topicsPrices = {
      '1': { selectedId: null, value: 0},
      '2': { selectedId: null, value: 0},
      '3': { selectedId: null, value: 0},
      '4': { selectedId: null, value: 0},
      '5': { selectedId: null, value: 0},
      '6': { selectedId: null, value: 0},
    }

    this.state = {
      scrollProgress: 0,
      idChoseQuality: null,
      topicsPrices: topicsPrices,
      isAllOptionsChecked: false
    }
  }
  
  handleQualityChoose = (topic, image) => {
    this.setState(prevState => ({
      topicsPrices: {
          ...prevState.topicsPrices,
          [topic.id]: {
              selectedId: image.id,
              value: image.price
          }
      }
    }))

    this.calculateTotalPrice();
  }

  handleSliderChange = (value, topicId) => {
    this.setState(prevState => ({
      topicsPrices: {
          ...prevState.topicsPrices,
          [topicId]: {
              selectedId: null,
              value: value
          }
      }
    }))

    this.calculateTotalPrice();
  }

  handleTopicSelect = (value, topicId, itemId) => {
    this.setState(prevState => ({
      topicsPrices: {
          ...prevState.topicsPrices,
          [topicId]: {
              selectedId: itemId,
              value: value
          }
      }
    }))

    this.calculateTotalPrice();
  }

  setScrollProgress = (value) => {
    this.setState({
      scrollProgress: value
    })
  }

  calculateTotalPrice = () => {
    const { topicsPrices } = this.state;
    let finalCost = 0;
    
    for (let i = 1; i < 7; i++) {
      finalCost += topicsPrices[i].value
    }

    this.checkIfAllTopicsChecked();

    return finalCost;
  }

  checkIfAllTopicsChecked = () => {
    const { topicsPrices } = this.state;
    var isAllChecked = true;

    for (let i = 1; i < 7; i++) {
      if(topicsPrices[i].value == 0) {
        isAllChecked = false;
        break;
      }
    }
    return isAllChecked

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
              topicsPrices={topicsPrices}
              isAllOptionsChecked={this.checkIfAllTopicsChecked()}/>
          </div>

          <div className="evaluation-topics">
            <EvaluationTopics 
              setScrollProgress={this.setScrollProgress}
              idChoseQuality={topicsPrices}
              topicsPrices={topicsPrices}
              handleQualityChoose={this.handleQualityChoose}
              handleTopicSelect={this.handleTopicSelect}
              handleSliderChange={this.handleSliderChange}
              />

            <div className="estimate-block-for-mobile">
              <EstimateBlock 
                value={this.calculateTotalPrice()} 
                scrollProgress={scrollProgress}
                topicsPrices={topicsPrices}
                isAllOptionsChecked={this.checkIfAllTopicsChecked()}/>
            </div>

            <div className='comments'>
              <Comments/>
            </div>
            
          </div>          
        </div>

        <div>
          <Footer/>
        </div>

      </div>
    )
  }
}

