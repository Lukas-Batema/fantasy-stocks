const request = require('request');
let url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=GTLB&apikey=${process.env.API_KEY}`;

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
    console.log(data);
  }
});