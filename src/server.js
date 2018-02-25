const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
var logger = require('morgan');
var fs = require('fs');
require('babel-register');

const bowlingControler = require('./controllers/bowling');

const app = express();
app.options('*', cors());
app.use(cors());

app.use(logger('common', {stream: fs.createWriteStream('./access.log', {flags: 'a'})}));
app.use(logger('dev'));

// Set basic headers to allow access from othter enviroment (port)
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST', 'OPTIONS');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

app.use('/ng5', (req, res) => res.json([{ng5:"ok"}]));

app.post('/api/play', jsonParser, bowlingControler );

//simple health check.
app.get('/health', (req, res) => res.sendStatus(200));

//So what is this...
app.get('/', (req, res) => res.send("The bowling calculator service"));
app.post('/', (req, res) => null);



app.listen(3000, () => console.log('Bowling service listening on 3000!'))