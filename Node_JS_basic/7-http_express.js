const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const pathToFile = process.argv[2];
  countStudents(pathToFile)
    .then((output) => {
      res.send(`This is the list of our students\n${output}`);
    })
    .catch((error) => {
      throw new Error('Cannot load the database');
    });
});

app.listen(port);

module.exports = app;
