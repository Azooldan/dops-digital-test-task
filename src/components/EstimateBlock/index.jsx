import React, { Component  } from "react";
import './style.css';
import ProgressBar from './ProgressBar';

export default class EstimateBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
      isSubmitDisabled: 'disabled'
    }

  }

  componentDidMount() {
  }

  handleChange = (e) => {
    this.setState({
      inputText: e.target.value
    });
  }

  render() {
    const { value, inputText, scrollProgress, topicsPrices, isSubmitDisabled } = this.props;

    return(
      <div className='estimate-block-container'>

        <div className='estimate-cost'>
          <span className='estimate-cost-text'>Estimate Cost</span>
          <span className='estimate-cost-price'>${value}</span>
          <hr className='estimate-cost-line'></hr>
        </div>

        <div className='progress-line'>
          <ProgressBar 
            completed={scrollProgress} 
            topicsPrices={topicsPrices}/>
        </div>

        <div className='contact-form'>
          <form id='contact-form' method="post">
            <input 
              className='contact-form-input' 
              type="email" 
              name="from_name"
              placeholder='E-mail' 
              value={inputText} 
              onChange={this.handleChange} 
              autoComplete="off"
            />
            <br/>
            <button 
              className='contact-form-submit' 
              type="submit" 
              onClick={this.handleSubmit} 
              disabled="false">
                Submit
            </button>
          </form>
        </div>

      </div>
    );
  }
}