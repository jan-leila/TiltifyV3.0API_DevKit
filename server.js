
const express = require('express');
const app = express();

const http = require('http');

const ports = {
  http: 3002
}

const httpServer = http.createServer(app);

httpServer.listen(ports.http, () => {
  console.log(`hosted http server on port ${ports.http}`);
})

app.get('/', (req, res) => {
  console.log('unknown request');
});

// TODO: set up all api routes
