const request = require('request');

setInterval(() => {
  let randSymbol = Math.round(Math.random() * 5);

  var symbol;

  if (randSymbol === 0) {
    symbol = 'GTLB';
  } else if (randSymbol === 1) {
    symbol = 'LAC';
  } else if (randSymbol === 2) {
    symbol = 'MSFT';
  } else if (randSymbol === 3) {
    symbol = 'AAPL';
  } else if (randSymbol === 4) {
    symbol = 'GOOGL';
  }

  var url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.API_KEY}`;

  request.get({
    url: url,
    json: true,
    headers: { 'User-Agent': 'request' }
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      console.log(`${symbol}:\n`, data);
    }
  });
}, 1000 * 1 * 60 * 5);