const about = require('../data/about.json');
const education = require('../data/education.json');
const experience = require('../data/experience.json');
const navigation = require('../data/navigation.json');

const app = require('express').Router();

app.get('/', (req, res) => {
  res.redirect('/applications');
});

app.get('/data/about', (req, res) => {
  res.json(education);
});

app.get('/data/edu', (req, res) => {
  res.json(education);
});

app.get('/data/exp', (req, res) => {
  res.json(experience);
});

app.get('/data/nav', (req, res) => {
  res.json(navigation);
});

module.exports = app;
