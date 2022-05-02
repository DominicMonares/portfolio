const app = require('express').Router();

app.get('/', (req, res) => {
  res.redirect('/about');
});

module.exports = app;
