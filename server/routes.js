const experience = require('../data/experience.json');
const navigation = require('../data/navigation.json');

const app = require('express').Router();

app.get('/', (req, res) => {
  res.redirect('/applications');
});

app.get('/data/exp', (req, res) => {
  res.json(experience);
})

app.get('/data/nav', (req, res) => {
  res.json(navigation);
})

module.exports = app;
