import React, { Component  } from "react";
import './style.css';
import ProgressBar from './ProgressBar';

export default class EstimateBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return(
      <div className='estimate-block-container'>
        <div className='estimate-cost'>
          <span className='estimate-cost-text'>Estimate Cost</span>
          <span className='estimate-cost-price'>$19.350</span>
          <hr className='estimate-cost-line'></hr>
        </div>

        <div className='progress-line'>
          <ProgressBar completed={15} />
        </div>

        <div className='contact-form'>
          <form>
            <input className='contact-form-input' type="email" name="user_email" placeholder='E-mail'/>
            <br/>
            <input className='contact-form-submit' type="submit" value="Submit"/>
          </form>
        </div>

      </div>
    );
  }
}