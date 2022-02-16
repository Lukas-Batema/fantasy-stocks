const Stocks = require('stocks.js');
const stocks = new Stocks('FWEGZI6T908UAAMF');

setInterval(async () => {
  let gtlbResult = await stocks.timeSeries({
    symbol: 'GTLB',
    interval: '5min',
    amount: 1
  });

  console.log(`
    **GTLB (GitLab)**:
    \n
    ${gtlbResult}
  `);
}, 1000 * 1 * 60 * 5);