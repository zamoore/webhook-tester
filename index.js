require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.status(200).send();
});

app.post('/', (req, res) => {
  res.send(req.body);
});

app.listen(process.env.PORT || 8888);