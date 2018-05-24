import React, { Component } from 'react';
import DisplayClock from './DisplayClock';
import Div from '../Grid/Div';
import Row from '../Grid/Row';
import Button from '../Buttons/Button';
import TimerDisplay from './TimerDisplay';

class Timer extends Component {
  state = {
    min: '',
    sec: ''
  }
  constructor(props) {
    super(props);
    this.startFromBeginning = this.startFromBeginning.bind(this);
  }

  componentDidMount () {
    this.setState({ min: 5, sec: 0 });
  }
  startFromBeginning = () => {
    this.componentDidMount();
  }


  addZero = (sec) => {
    if (sec < 10) {
      sec = "0" + sec;
    }
    return sec;
  }
  
  startTime = () => {
    let min = this.state.min;
    let sec = this.state.sec;
    if (min === 0 && sec === 0) {
      this.startFromBeginning();
    }
    else {
      if (sec === 0) {
        sec = 59;
        min = min - 1;
      }
      sec = sec - 1;
      this.setState({ min : min, sec : sec });
    }
  }
  countDownTime = () => {
    if (this.state.min >= 0 && this.state.sec >= 0) {
      setTimeout(this.startTime, 1000);
    }
  }

  timerOutput = () => {
    let timer = [0, this.state.min, ":", this.addZero(this.state.sec)];
    let timerToDisplay = "";
    for (let i = 0; i < timer.length; i++){
      timerToDisplay += timer[i];
    }
    return timerToDisplay;
  }
  render () {
    this.countDownTime();
    let timerToDisplay = this.timerOutput();
    return (
      <Div column = "col-md-4">
        <TimerDisplay timer = { timerToDisplay }/>
        <button onClick = {this.startFromBeginning}>click me</button>
        <Button styleClass ="button button-update" 
        onClick = { this.startFromBeginning } 
        buttonText = "Restart timer"
        id = "updateTimerButton" />
      </Div>
    )
  }
}

export default Timer;