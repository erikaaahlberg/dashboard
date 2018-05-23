import React, { Component } from 'react';
import Div from '../Grid/Div';
import Row from '../Grid/Row';
import Table from '../Grid/Table';
import TableRow from '../Grid/TableRow';
import TableData from '../Grid/TableData';
import ExchangeDisplay from './ExchangeDisplay';

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
                  this.setState({ exchanges: exchangeData.rates });
                  console.log(exchangeData);
                  /*const exchangeRates = this.state.exchanges.rates;
                  console.log(this.mapObject(exchangeRates));*/
        })
    }

    mapObject = (exchangeRates) => {
      console.log(exchangeRates);
      const tableContent = Object.keys(exchangeRates).map(item => {
         <TableRow id = { item }>
                 <TableData data = { item } id = { item }/>
                 <TableData data = { exchangeRates[item] } id = { exchangeRates[item] }/>
                </TableRow>
          
        /*console.log(item);
        console.log(exchangeRates[item]);*/
      });
      return tableContent;
    }

    filterExchanges = (country) => {

    }

    render () {
      const eur = this.state.exchanges.EUR;
      const sek = this.state.exchanges.SEK;
      /*const exchangeTableContent = this.mapObject(this.state.exchanges.rates);
      console.log(this.state.exchanges.rates);
      const exchangeTableContent = this.mapObject(exchangeRates);
      
      /*const exchangeTableData = Object.keys(this.state.exchanges).map( country => 
        <TableRow id = { country }>
        <TableData data = { country } />
        <TableData data = { this.state.exchanges[country] } /> 
        </TableRow> );
       const exchangeTableData = this.state.exchanges.map((country) => 
        <TableRow id = {country}>
        <TableData data = { country } />
        <TableData data = { country } />
        </TableRow>
      );
      console.log(exchangeTableData);
      
      
            { 
              this.mapObject(exchangeRates, function (key, value) {
                return <div>Key: {key}, Value: {value}</div>;
              })
            }
            
            */
      return (
          <Div column = "col-md-6">
            <Row>
            <Div column = "col-md-6">
              <p>EUR: {eur}</p>
            </Div>
            <Div column = "col-md-6">
              <p>SEK: {sek}</p>
            </Div>
            </Row>
          </Div>
      )
    }
}

export default ExchangeView;