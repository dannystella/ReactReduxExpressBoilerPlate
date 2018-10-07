const express = require('express');
const bodyParser = require('body-parser');
const request = require('request')
const app = express();
const userRoute = require('./routes/users/user_index');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

app.post('/', function(req, res) {
  
})

app.get('/ping', function(req, res) {
  res.send("pong");
})

app.use('/users', userRoute);

const port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});