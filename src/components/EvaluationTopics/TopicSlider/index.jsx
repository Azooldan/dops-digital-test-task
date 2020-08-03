import React from "react";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";

import { styles } from './styles';

export default withStyles(styles)(Slider);

// export default class TopicSlider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     }
//   }

//   render() {
//     const { slider } = this.props;
//     const numberOfSliderPositions = slider.values.length;

//     return(
//       <div>
//         <input type="range" id="cowbell" name="cowbell" min="0" max={numberOfSliderPositions-1} list="sliderticks" step="1" className="slider"/>
//         <datalist className="sliderticks">
//           {
//             slider.values.map((value, i) =>  <p  label={value}/> )
//           }
//         </datalist>
//         {/* <datalist id="num">
//           {
//             slider.values.map((value, i) =>  <option  label={value}/> )
//           }
//         </datalist>  */}
//       </div>
//     );
//   }
// }