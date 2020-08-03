import React, { Component  } from "react";
import './style.css';

export default class TopicSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { slider } = this.props;
    const numberOfSliderPositions = slider.values.length;

    return(
      <div>
        <input type="range" id="cowbell" name="cowbell" min="0" max={numberOfSliderPositions-1} list="sliderticks" step="1" class="slider"/>
        <datalist class="sliderticks">
          {
            slider.values.map((value, i) =>  <p  label={value}/> )
          }
        </datalist>
        {/* <datalist id="num">
          {
            slider.values.map((value, i) =>  <option  label={value}/> )
          }
        </datalist>  */}
      </div>
    );
  }
}