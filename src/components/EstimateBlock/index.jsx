import React, { Component  } from "react";
import './style.css';

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

        </div>

        <div className='contact-form'>

        </div>

      </div>
    );
  }
}