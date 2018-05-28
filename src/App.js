import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Container from './Components/Grid/Container';
import Row from './Components/Grid/Row';
import Div from './Components/Grid/Div';
import Table from './Components/Grid/Table';
import TableRow from './Components/Grid/TableRow';
import TableData from './Components/Grid/TableData';
import ExchangeView from './Components/ExchangeRate/ExchangeView';
import WeatherView from './Components/Weather/WeatherView';
import DisplayClock from './Components/Time/DisplayClock';
import Notes from './Components/Notes/Notes';
import Timer from './Components/Time/Timer';
import './App.css';

class App extends Component {
    render() {
      return (
        <React.Fragment>
        <Header/>
        <Container>
          <Row>
            <DisplayClock/>
            <Notes/>
            <Timer/>
          </Row>
          <Row>
            <ExchangeView />
            <WeatherView/>
          </Row>
        </Container>
        </React.Fragment>
      );
    }
  }
  
  export default App;