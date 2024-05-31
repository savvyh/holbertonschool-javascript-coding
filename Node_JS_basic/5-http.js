const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello Holberton School!');
    res.end();
  } else if (parsedUrl.pathname === '/students') {
    const pathToFile = process.argv[2];
    if (!pathToFile) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Database path is missing');
      return;
    }

    countStudents(pathToFile)
      .then((output) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n');
        res.write(output);
        res.end();
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Cannot load the database');
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(port);

module.exports = app;