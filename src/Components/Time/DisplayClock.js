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
    };  // add zero in front of numbers < 10
    return number;
  }

  getTime = () => {
    const today = new Date();
    const hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    min = this.addZero(min);
    sec = this.addZero(sec);
    const time = `${hour} : ${min} : ${sec}`;
    /*setTimeout(getTime, 500);*/
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