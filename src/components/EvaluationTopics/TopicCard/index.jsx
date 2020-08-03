import React, { Component  } from "react";
import './style.css';

export default class EvaluationTopics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: this.props.card,
      topic: this.props.topic,
      checked: false
    }
  }

  handleClick = () => {
    const { card, topic, checked} = this.state;
    
    this.setState( ({checked}) => {
      return{
        checked: !checked
      }
    });

    // pass !checked value for calculating total cost
    this.props.handleCardClick(card, topic, !checked);
  }

  render() {
    const { card, checked, topic } = this.state;
    
    return(
      <div className={`${checked ? 'card card-active' : 'card'}`} onClick={() => this.handleClick()}>

        <div className='card-info-text'>
          <div className='card-number'>
            {card.cardNumber}
          </div>
          {
            parseInt(topic.id) === 1 
              ? <img src='img/on-hover-mage.png' className="card-image" alt="Animated card picture"/> 
              : null
          }
          <div className='card-text'>
            {card.cardText}
          </div>
        </div>

        <div className={`${checked ? 'card-circle card-circle-active' : 'card-circle'}`}></div>

      </div>
    );
  }
}
