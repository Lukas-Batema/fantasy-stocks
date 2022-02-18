const request = require('request');

function index() {
  let searchBar = document.getElementById('search-bar');

  let search = searchBar
                .innerHTML
                .toUpperCase()
                .valueOf();

  let url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&symbol=${search}&apikey=${process.env.API_KEY}`;

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
      console.log(`${search}:\n`, data);
    }
  });
}