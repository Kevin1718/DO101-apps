var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Mi primer hola mundo en node con red hat por Kevin!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

