const Stocks = require('stocks.js');

const stocks = new Stocks('FWEGZI6T908UAAMF');

setTimeout(async index => {
    let result = await stocks.timeSeries({
    symbol: 'GTLB',
    interval: '1min',
    amount: 10
  });

  console.log(result);
}, 1000 * 1 * 1 * 60);