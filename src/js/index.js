import Stocks from 'stocks.js';

const stocks = new Stocks('FWEGZI6T908UAAMF');

let result = await stocks.timeSeries({
  symbol: 'GTLB',
  interval: '1min',
  amount: 10
});