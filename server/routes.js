const app = require('express').Router();

app.get('/', (req, res) => {
  res.redirect('/applications');
});

module.exports = app;
