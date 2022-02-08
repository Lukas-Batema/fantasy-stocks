const Stocks = require('stocks.js');

const stocks = new Stocks('FWEGZI6T908UAAMF');

let result = stocks.timeSeries({
  symbol: 'GTLB',
  interval: '1min',
  amount: 10
});

console.log(result);