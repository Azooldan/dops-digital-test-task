import React, { Component  } from "react";
import './style.css';

export default class TopicHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textAreaValue: '',
      wordsNumber: 0
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleChange = (e) => {
    const wordsNumber = e.target.value.length === 0 ? 0 : this.countWords(e.target.value);

    this.setState({
      textAreaValue: e.target.value,
      wordsNumber
    })
  }

  countWords(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
    str = str.replace(/[ ]{2,}/gi," ");
    str = str.replace(/\n /,"\n");
    return str.split(' ').length;
  }

  render() {
    const { textAreaValue, wordsNumber } = this.state;
    
    return(
      <div className='comment-container'>

        <div className='comment-label'>
          <span>Leave comment</span>
        </div>

        <div className='comment-textarea'>
        <form>
          <textarea 
            placeholder='Paste your text to count words..' 
            width='300px' 
            rows="15" 
            className='textarea'
            onChange={this.handleChange}
            defaultValue={textAreaValue} 
            autoComplete="off"/>

            <br/>

            <input 
              className='comments-form-submit' 
              type="submit" 
              onClick={this.handleSubmit} 
              value={wordsNumber}/>

            <span className='comments-count-btn-label'>Words</span>
            
          </form>

        </div>
      </div>
    );
  }
}