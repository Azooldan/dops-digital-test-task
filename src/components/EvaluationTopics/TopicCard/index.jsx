import React, { Component  } from "react";
import './style.css';

export default class EvaluationTopics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: this.props.card,
      checked: false
    }
  }
  
  handleClick = (text) => {
    this.setState( ({checked}) => {
      return{
        checked: !checked
      }
    })

    this.props.handleCardClick(text)
  }

  render() {
    const { card, checked } = this.state;

    return(
      <div className={`${checked ? 'card card-active' : 'card'}`} onClick={() => this.handleClick(card.cardText)}>
        
        <div className='card-info-text'>
          <div className='card-number'>
            {card.cardNumber}
          </div>
          
          <div className='card-text'>
            {card.cardText}
          </div>
        </div>

        <div className={`${checked ? 'card-circle card-circle-active' : 'card-circle'}`}></div>

      </div>
    );
  }
}
