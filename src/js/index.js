const Stocks = require('stocks.js');
const stocks = new Stocks('FWEGZI6T908UAAMF');

setInterval(async () => {
  let gtlbResult = await stocks.timeSeries({
    symbol: 'GTLB',
    interval: '1min',
    amount: 1
  });

  let gtlbResultFormat = gtlbResult.keys

  console.log('GTLB (GitLab):');
  console.log(gtlbResultFormat);
  console.log("----------");
}, 1000 * 1 * 60 * 1);