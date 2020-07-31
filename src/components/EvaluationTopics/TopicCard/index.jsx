import React, { Component  } from "react";
import './style.css';

export default class EvaluationTopics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: this.props.card
    }
  }

  render() {
    const { card } = this.state;

    return(
      <div className='card'>
        
        <div className='card-info-text'>
          <div className='card-number'>
            {card.cardNumber}
          </div>
          
          <div className='card-text'>
            {card.cardText}
          </div>
        </div>

        <div className='card-circle'></div>

      </div>
    );
  }
}
