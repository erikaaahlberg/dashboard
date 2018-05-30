import React, { Component } from 'react';
import Div from '../Grid/Div';
import Row from '../Grid/Row';
import { getTime } from '../../GlobalFunctions';

class DisplayClock extends Component {
  state = {
    time: ''
  }
  componentDidMount(){
    this.getTime();
  }

  addZero = (number) => {
    if (number < 10) {
      number = "0" + number;
    }; 
    return number;
  }

  getTime = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const day = days[today.getDay()];
    const hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    min = this.addZero(min);
    sec = this.addZero(sec);
    return `${day} ${hour}:${min}:${sec}`;
  }
  setTime = () => {
    let time = this.getTime();
    this.setState({ time: time });  
  }
  render(){
    setInterval(this.setTime, 500);
    return(
      <Div column = "col-md-2" styleClass = "wrapper wrapper-clock" id = "clockWrapper">
        {this.state.time}
      </Div>
    )
  }
}

export default DisplayClock;