import React, { Component  } from "react";
import './style.css';

export default class TopicHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: this.props.topic
    }
  }

  render() {
    const { topic } = this.state;

    return(
      <div className='topic-header'>
        <div className='topic-header-circle'>
          <span className='topic-header-number'>{topic.number}</span>
        </div>

        <div className='topic-header-title'>
          <p>{topic.title}</p>
        </div>

        <div className='topic-header-text'>
          <p>{topic.text}</p>
        </div>
      </div>
    );
  }
}