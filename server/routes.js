const app = require('express').Router();

app.get('/', (req, res) => {
  res.redirect('/apps');
});

module.exports = app;
