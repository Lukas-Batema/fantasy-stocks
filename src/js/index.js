const Stocks = require('stocks.js');

const stocks = new Stocks('FWEGZI6T908UAAMF');

// Get the stats once per day, for one year (need to figure out how to have this go indefintly, without having a mass memory leak)
for (let i = 1; i <= 365; i++) {
  // Get the stats for a number of different stocks, once per day.
  setInterval(async dailyStats => {
    let gtlbDailyResult = await stocks.timeSeries({
      symbol: 'GTLB',
      interval: 'daily',
      amount: 1
    });

    // Log the GTLB daily stock stats in console for now
    console.log(gtlbDailyResult);

    let applDailyResult = await stocks.timeSeries({
      symbol: 'APPL',
      interval: 'daily',
      amount: 1
    });

    // Log the APPL daily stock stats in console for now
    console.log(applDailyResult);
  }, 1000 * 60 * 60 * 24);
}