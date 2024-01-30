const navigation = require('../data/navigation.json');

const app = require('express').Router();

app.get('/', (req, res) => {
  res.redirect('/apps');
});

app.get('/data/nav', (req, res) => {
  res.json(navigation);
})

module.exports = app;
