import React, { Component } from 'react';
import Div from '../Grid/Div';
import Row from '../Grid/Row';

class DisplayClock extends Component {
  state = {
    time: ''
  }
  /*componentDidMount(){
    setTimeout(this.getTime, 500);
  }*/

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
    const time = `${day} ${hour} : ${min} : ${sec}`;
    this.setState({ time: time });  
  }

  render(){
    setTimeout(this.getTime, 500);
    return(
      <Div column = "col-md-4">
        {this.state.time}
      </Div>
    )
  }
}

export default DisplayClock;