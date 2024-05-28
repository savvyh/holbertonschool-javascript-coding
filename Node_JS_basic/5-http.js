const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer((req, res) => {
  const requete = url.parse(req.url, true);
  if (requete.pathname === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (requete.pathname === '/students') {
    const pathToFile = process.argv[2];
    countStudents(pathToFile)
      .then((output) => {
        res.end(`This is the list of our students\n${output}`);
      })
      .catch(() => {
        res.end('Cannot load the database');
      });
  } else {
    res.write('Cannot load the database');
    res.end();
  }
});

app.listen(port);

module.exports = app;
