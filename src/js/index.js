const Stocks = require('stocks.js');
const stocks = new Stocks('FWEGZI6T908UAAMF');

setInterval(async () => {
  let gtlbResult = await stocks.timeSeries({
    symbol: 'GTLB',
    interval: '1min',
    amount: 1
  });

  let gtlbFormatResult = Array.toString(gtlbResult).substring(2, 7);
  console.log('GTLB (GitLab):');
  console.log(gtlbFormatResult);
  console.log("----------");
}, 1000 * 1 * 60 * 1);