import React, { Component  } from "react";
import './style.css';

export default class EvaluationTopics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: this.props.card,
      topic: this.props.topic,
    }
  }

  handleClick = () => {
    const { card, topic} = this.state;
    
    this.props.handleTopicSelect(card.price, topic.id, card.id);
  }

  render() {
    const { card, topic } = this.state;
    const { topicsPrices } = this.props;
    
    return(
      <div className={`${topicsPrices[topic.id].selectedId === card.id ? 'card card-active' : 'card'}`} onClick={() => this.handleClick()}>

        <div className='card-info-text'>
          <div className='card-number'>
            {card.cardNumber}
          </div>
          {
            topic.id === 1 
              ? <img src='img/on-hover-mage.png' className="card-image" alt="Animated card picture"/> 
              : null
          }
          <div className='card-text'>
            {card.cardText}
          </div>
        </div>

        <div className={`${topicsPrices[topic.id].selectedId === card.id ? 'card-circle card-circle-active' : 'card-circle'}`}></div>

      </div>
    );
  }
}
