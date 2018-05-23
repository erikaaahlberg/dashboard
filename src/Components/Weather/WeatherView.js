import React, { Component } from 'react';
import Div from '../Grid/Div';
import Row from '../Grid/Row';

class WeatherView extends Component {
  state = {
        city: 'Stockholm',
        tempNow: '',
        minTemp: '',
        maxTemp: '',
        humidity: '',
        weather: ''
  }

  componentDidMount(){
    this.fetchWeather();
  }

  convertTemperature = (kelvin) => {
    const celsius = kelvin - 273.15;
    return celsius;
  } 

  correctToCapitalLetter = (word) => {
    const firstLetter = word.charAt(0);
    const capital = firstLetter.toUpperCase();
    word = word.substring(0, 0) + capital + word.substring(0 + 1);
    return word;
  }
  
  fetchWeather = () => {
      fetch('http://api.openweathermap.org/data/2.5/weather?q=Stockholm&APPID=2f48d31b86a2cb449c5d750f3c3e1a76')
          .then(response => response.json())
              .then((weatherData) => {
                this.setState({ 
                  tempNow: this.convertTemperature(weatherData.main.temp),
                  minTemp: this.convertTemperature(weatherData.main.temp_min),
                  maxTemp: this.convertTemperature(weatherData.main.temp_max),
                  humidity: weatherData.main.humidity,
                  weather: this.correctToCapitalLetter(weatherData.weather[0].description)
                });
              })
  }


  render () {
    return (
      <Div column = "col-md-6">
        <p>City: {this.state.city}</p>
        <p>Min temp: {this.state.minTemp}</p>
        <p>Max temp: {this.state.maxTemp}</p>
        <p>Humidity: {this.state.humidity}</p>
        <p>Weather: {this.state.weather}</p>
      </Div>
    )  
  }
}

export default WeatherView;