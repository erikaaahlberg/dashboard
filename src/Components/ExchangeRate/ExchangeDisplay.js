import React from 'react';
import TableRow from '../Grid/TableRow';
import TableData from '../Grid/TableData';

const ExchangeDisplay = (props) => {
    const exchangeRates = props.exchanges;
        console.log(props.exchanges);
        return (
            <React.Fragment>
            {props.exchanges}</React.Fragment>
            /*Object.keys(props.exchanges.rates).map(item => {
             <TableRow id = { item }>
                   <TableData data = { item } id = { item }/>
                   <TableData data = { props.exchanges.rates[item] } id = { props.exchanges.rates[item] }/>
                  </TableRow>
            
          console.log(item);
          console.log(exchangeRates[item]);
        })*/
    )
}
export default ExchangeDisplay;