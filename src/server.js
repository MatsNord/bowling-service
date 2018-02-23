const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
require('babel-register');

const bowlingControler = require('./controllers/bowling');

const app = express();

app.post('/api/play', jsonParser, bowlingControler );

//simple health check.
app.get('/health', (req, res) => res.sendStatus(200));

//So what is this...
app.get('/', (req, res) => res.send("The bowling calculator service"));


app.listen(3000, () => console.log('Bowling service listening on 3000!'))