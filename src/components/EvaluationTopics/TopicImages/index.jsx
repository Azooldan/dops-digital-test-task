import React, { Component  } from "react";
import './style.css';

export default class TopicImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleClick = (image) => {    
    this.props.handleQualityChoose(image);
  }

  render() {
    const { image, idChoseQuality } = this.props;

    return(
      <div className='topic-quality-item' onClick={() => this.handleClick(image)}>
          <img src={image.url} alt={image.text} className='topic-quality-image'/>

          <div className='image-checkbox'>
            <div className={`${idChoseQuality == image.id ? 'card-circle card-circle-active' : 'card-circle'}`}></div>
            <span>{image.text}</span>
          </div>
      </div>
    );
  }
}