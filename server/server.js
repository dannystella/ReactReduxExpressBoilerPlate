
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

app.post('/', function(req, res) {
  
})

app.get('/ping', function(req, res) {
  res.send("pong");
})

const port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});