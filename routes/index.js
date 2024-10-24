const express = require('express');
const router = express.Router();

/* Route for Home page */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home' });
});

/* Route for Projects page */
router.get('/projects', (req, res, next) => {
  res.render('projects', { title: 'Projects' });
});

/* Route for Contact page */
router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'Contact' });
});

/* Route for About page */
router.get('/about', (req, res, next) => {
  res.render('about', { title: 'About' });
});


module.exports = router;
