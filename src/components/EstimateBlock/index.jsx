import React, { Component  } from "react";
import './style.css';
import ProgressBar from './ProgressBar';

export default class EstimateBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputText: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.sendEmail();
  }

  sendEmail = async ( ) => {    
    const { email } = this.state;
    console.log(email)
    const res = await fetch('/src/api/send.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(email)
    })
    const text = await res.text();
    console.log(text)
  }


  render() {
    const { value, inputText, scrollProgress } = this.props;

    return(
      <div className='estimate-block-container'>
        <div className='estimate-cost'>
          <span className='estimate-cost-text'>Estimate Cost</span>
          <span className='estimate-cost-price'>${value}</span>
          <hr className='estimate-cost-line'></hr>
        </div>

        <div className='progress-line'>
          <ProgressBar completed={scrollProgress} />
        </div>

        <div className='contact-form'>
          <form>
            <input 
              className='contact-form-input' 
              type="email" 
              placeholder='E-mail' 
              value={inputText} 
              onChange={this.handleChange} 
              autoComplete="off"
            />
            <br/>
            <input 
              className='contact-form-submit' 
              type="submit" 
              onClick={this.handleSubmit} 
              value="Submit"
            />
          </form>
        </div>

      </div>
    );
  }
}