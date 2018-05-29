import React, { Component } from 'react';
import DisplayClock from './DisplayClock';
import Div from '../Grid/Div';
import Row from '../Grid/Row';
import Button from '../Buttons/Button';
import TimerDisplay from './TimerDisplay';

class Timer extends Component {
  state = {
    min: '',
    sec: '',
    column: ''
  }

  componentDidMount () {
    this.startFromBeginning();
    this.countDownTime();
  }
  
  startFromBeginning = () => {
    this.setState({ 
      min: 0, 
      sec: 15,
      column: 'col-md-12 timer' });
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
    if (min === 0 && sec <= 10) {
      this.setState({ column: 'col-md-12 timer --red' });
      if (sec > 0) {
        sec = sec - 1;
        this.setState({ min : min, sec : sec });
      }
    }
    else {
      if (sec === 0) {
        sec = 59;
        min = min - 1;
        this.setState({ min : min, sec : sec });
      }
      sec = sec - 1;
      this.setState({ min : min, sec : sec });
    }
  }
  countDownTime = () => {
    if (this.state.min >= 0 && this.state.sec >= 0) {
      setInterval(this.startTime, 1000);
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
    let timerToDisplay = this.timerOutput();
    let divColumn = this.state.column;
    return (
      <Div column = "col-md-2" styleClass = "wrapper wrapper-timer" id = "timerWrapper">
        <TimerDisplay column = { this.state.column } timer = { timerToDisplay }/>
        <Button styleClass ="button button-update" 
        event = { this.startFromBeginning } 
        buttonText = "Restart"
        id = "updateTimerButton" />
      </Div>
    )
  }
}

export default Timer;