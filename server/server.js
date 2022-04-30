const express = require('express');
const path = require('path');
const router = require('./routes.js');

const createServer = () => {
  const app = express();
  app.use('/', router);
  app.use(express.static(path.join(__dirname, '..', '/client/dist')));
  return app;
}

module.exports = createServer;
