const about = require('../data/about.json');
const applications = require('../data/applications.json');
const contacts = require('../data/contacts.json');
const education = require('../data/education.json');
const experience = require('../data/experience.json');
const iconLinks = require('../data/iconLinks.json');
const navigation = require('../data/navigation.json');
const skills = require('../data/skills.json');

const app = require('express').Router();

app.get('/', (req, res) => {
  res.redirect('/apps');
});

app.get('/data/about', (req, res) => {
  res.json(about);
});

app.get('/data/applications', (req, res) => {
  res.json(applications);
});

app.get('/data/contacts', (req, res) => {
  res.json(contacts);
});

app.get('/data/edu', (req, res) => {
  res.json(education);
});

app.get('/data/exp', (req, res) => {
  res.json(experience);
});

app.get('/data/iconLinks', (req, res) => {
  res.json(iconLinks);
});

app.get('/data/nav', (req, res) => {
  res.json(navigation);
});

app.get('/data/skills', (req, res) => {
  res.json(skills);
});

module.exports = app;
