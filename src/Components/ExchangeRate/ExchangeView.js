import React, { Component } from 'react';
import Div from '../Grid/Div';
import Row from '../Grid/Row';
import Table from '../Grid/Table';
import TableRow from '../Grid/TableRow';
import TableData from '../Grid/TableData';

class ExchangeView extends Component {
    state = {
        exchanges: ''
    }
    componentDidMount(){
      this.fetchExchanges();
    }
    
    fetchExchanges = () => {
        fetch('http://data.fixer.io/api/latest?access_key=3194886927d7a7363336a29f5a55e8d4')
            .then(response => response.json())
                .then((exchangeData) => {
                  const exchanges = {
                    base: exchangeData.base,
                    sek: exchangeData.rates.SEK,
                    usd: exchangeData.rates.USD,
                    aud: exchangeData.rates.AUD,
                    lastUpdate: exchangeData.date 
                  }
                  this.setState({ exchanges: exchanges });
                  console.log(this.state.exchanges);
        })
    }
/*
    mapObject = (exchangeRates) => {
      console.log(exchangeRates);
      const tableContent = Object.keys(exchangeRates).map(item => {
         <TableRow id = { item }>
                 <TableData data = { item } id = { item }/>
                 <TableData data = { exchangeRates[item] } id = { exchangeRates[item] }/>
          </TableRow>
      });
      return tableContent;
    }
*/
    render () {
      const exchange = this.state.exchanges;
      return (
          <Div column = "col-md-6">
            <Row>
              <Div column = "col-md-12">
                <p>Base: {exchange.base}</p>
              </Div>
              <Div column = "col-md-12">
                <p>Swedish SEK: {exchange.sek}</p>
              </Div>
              <Div column = "col-md-12">
                <p>United States USD: {exchange.usd}</p>
              </Div>
              <Div column = "col-md-12">
                <p>Australian AUD: {exchange.aud}</p>
              </Div>
              <Div column = "col-md-12">
                <p>Last update: {exchange.lastUpdate}</p>
            </Div>
            </Row>
          </Div>
      )
    }
}
export default ExchangeView;