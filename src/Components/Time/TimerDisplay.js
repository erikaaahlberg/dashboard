import React from 'react';
import Div from '../Grid/Div';

const TimerDisplay = (props) => {
  return (
    <Div column = { props.column } id = "timer">
      { props.timer }
    </Div>
    )
}

export default TimerDisplay;