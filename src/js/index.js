const Stocks = require('stocks.js');

const stocks = new Stocks('FWEGZI6T908UAAMF');

for (let i = 0; i <= 365; i++) {
  setInterval(async test => {
    let result = await stocks.timeSeries({
      symbol: 'GTLB',
      interval: '1day',
      amount: 365
    });

    console.log(result);
  }, 1000 * 60 * 60 * 24);
}