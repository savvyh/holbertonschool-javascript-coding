const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer((req, res) => {
  const requete = url.parse(req.url, true);

  if (requete.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (requete.pathname === '/students') {
    const pathToFile = process.argv[2];
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    countStudents(pathToFile)
      .then((data) => {
        res.write(`This is the list of our students\n${data}`);
        res.end();
      })
      .catch(() => {
        res.end('Cannot load the database');
      });
  }
});

app.listen(port);

module.exports = app;
