const app = require('express').Router();

app.get('/', (req, res) => {
  res.send('Howdy');
})

module.exports = app;
