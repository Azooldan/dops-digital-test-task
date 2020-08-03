import React, { Component  } from "react";
import './style.css';

export default class TopicImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }

  handleClick = () => {
    const { card, topic} = this.state;
    console.log('dsfdsf')
    this.setState( ({checked}) => {
      return{
        checked: !checked
      }
    });

    // pass !checked value for calculating total cost
    //this.props.handleCardClick(card, topic, !checked);
  }

  render() {
    const { image } = this.props;
    const { checked } = this.state;
    
    return(
      <div className='topic-quality-item' onClick={() => this.handleClick()}>
          <img src={image.url} alt={image.text} className='topic-quality-image'/>

          <div className='image-checkbox'>
            <div className={`${checked ? 'card-circle card-circle-active' : 'card-circle'}`}></div>
            <span>{image.text}</span>
          </div>
      </div>
    );
  }
}