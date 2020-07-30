import React from "react";

const ProgressBar = (props) => {
  const { completed } = props;

  const grayLineContainer = {
    height: 1,
    width: '100%',
    backgroundColor: "#494949",
    borderRadius: 50,
    position: 'relative',
  }

  const progressLineContainer = {
    height: '5px',
    transform: 'translate(0, -2px)',
    width: `${completed}%`,
    backgroundColor: '#674BB1',
    borderRadius: 'inherit',
    textAlign: 'right',
  }

  const dotUnmarked = {
    height: '23px',
    width: '23px',
    borderRadius: '50%',
    display: 'inline-block',
    transform: 'translate(0, -11px)',
    backgroundColor: "#1B1B1B",
    border: '1px solid #7B7B7B'
  }

  const dotMarked = {
    height: '23px',
    width: '23px',
    borderRadius: '50%',
    display: 'inline-block',
    transform: 'translate(0, -11px)',
    backgroundColor: "#674BB1",
    border: '1px solid #674BB1'
  }
  
  const dotContainer = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    zIndex: '100',
  }

  const dotNumber = {
    display: 'inline-block',
    transform: 'translate(0, 25px)',
    color: '#7B7B7B',
    fontSize: '12px',

  }

  return (
    <div style={grayLineContainer}>
      
      <div style={dotContainer}>
        
        <span style={completed > 6 ? dotMarked : dotUnmarked}>
          <span style={dotNumber}>1</span>
        </span>
        <span style={completed > 17 ? dotMarked : dotUnmarked}>
          <span style={dotNumber}>2</span>
        </span>
        <span style={completed > 33 ? dotMarked : dotUnmarked}>
          <span style={dotNumber}>3</span>
        </span>
        <span style={completed > 50 ? dotMarked : dotUnmarked}>
          <span style={dotNumber}>4</span>
        </span>
        <span style={completed > 67 ? dotMarked : dotUnmarked}>
          <span style={dotNumber}>5</span>
        </span>
        <span style={completed > 84 ? dotMarked : dotUnmarked}>
          <span style={dotNumber}>6</span>
        </span>

      </div>

      <div style={progressLineContainer}></div>

    </div>
  );
};

export default ProgressBar;