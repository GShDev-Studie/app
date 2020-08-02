const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', function (req, res) {
res.set('Content-Type', 'text/html');	
  res.send('<b>API Send Email Free</b>');
});
app.get('/docs', function (req, res) {
  fs.readFile('docs/index.html', function (err, html) {
    
  res.set('Content-Type', 'text/html');
  res.send(html);
  });
});

app.listen(3000);
