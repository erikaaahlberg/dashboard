import React, { Component } from 'react';
import Div from '../Grid/Div';
import Row from '../Grid/Row';
import H2 from '../Header/H2';
import List from '../List/List';
import ListItems from '../List/ListItems';
import Button from '../Buttons/Button';

class ExchangeView extends Component {
    state = {
        exchanges: [],
        listTitles: [
          'Base',
          'Swedish SEK',
          'United States USD', 
          'Australian AUD',
          'Last update'
        ]
    }
    componentDidMount(){
      this.fetchExchanges();
    }

    getTime = () => {
      const today = new Date();
      const hour = today.getHours();
      let min = today.getMinutes();
      let sec = today.getSeconds();
      min = this.addZero(min);
      sec = this.addZero(sec);
      return  `${hour}:${min}:${sec}`;
      /*const time = `${hour} : ${min} : ${sec}`;
      this.setState({ time: time });  */
    }
    
    addZero = (number) => {
      if (number < 10) {
        number = "0" + number;
      }; 
      return number;
    }

    fetchExchanges = () => {
        fetch('http://data.fixer.io/api/latest?access_key=3194886927d7a7363336a29f5a55e8d4')
            .then(response => response.json())
                .then((exchangeData) => {
                  const exchanges = {
                    Base: exchangeData.base,
                    SEK: exchangeData.rates.SEK,
                    USD: exchangeData.rates.USD,
                    AUD: exchangeData.rates.AUD,
                    Updated: `${exchangeData.date} at ${this.getTime()}`
                  }
                  this.setState({ exchanges: exchanges });
                  console.log(this.state.exchanges);
        })
    }

    render () {
      const exchange = this.state.exchanges;
      return (
              <Div column = "col-md-5">
                <H2 title = "Exchange rates"/>
                <List id = "ul-exchange" styleClass = "ul" listObject = { this.state.exchanges } listArray = { this.state.listTitles }/>
                <Button id = "updateExchange" styleClass = "button button-update" buttonText = "Update" event = { this.fetchExchanges } />
              </Div>
      )
    }
}
/*
<Div column = "col-md-6" id = "exchange-wrapper">
            <Row>
              <Div column = "col-md-12">
                <p>Base: { exchange.base }</p>
              </Div>
              <Div column = "col-md-12">
                <p>Swedish SEK: { exchange.sek }</p>
              </Div>
              <Div column = "col-md-12">
                <p>United States USD: { exchange.usd }</p>
              </Div>
              <Div column = "col-md-12">
                <p>Australian AUD: { exchange.aud }</p>
              </Div>
              <Div column = "col-md-6">
                <p>Last update: { exchange.dateLastUpdate } at { exchange.timeLastUpdate }</p>
              </Div>
              <Div column = "col-md-6">
                <Button id = "updateExchange" styleClass = "button button-update" buttonText = "Update" event = { this.fetchExchanges } />
              </Div>
            </Row>
          </Div>
*/
export default ExchangeView;