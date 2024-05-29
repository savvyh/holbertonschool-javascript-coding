const express = require('express');
const router = require('./routes/index.js');

const app = express();
const port = 1245;

app.use('/', router);

app.listen(port);

module.exports = app;
