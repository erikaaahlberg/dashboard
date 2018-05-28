import React from 'react';
import Div from '../Grid/Div';

const TimerDisplay = (props) => {
  return (
    <Div column = "col-md-3" id = "timer">
      { props.timer }
    </Div>
    )
}

export default TimerDisplay;