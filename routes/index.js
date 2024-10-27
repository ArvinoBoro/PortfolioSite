const express = require('express');
const router = express.Router();

/* Route for Home page */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Home',
    heading: 'HOME' 
  });
});

/* Route for the Home page */ 
router.get('/home', (req, res, next) => {
  res.render('index', {
    title: 'Home',
    heading: 'HOME' 
  });
});

/* Route for Projects page */
router.get('/projects', (req, res, next) => {
  res.render('projects', {
    title: 'Projects', 
    heading: 'PROJECTS'
  });
});

/* Route for Contact page */
router.get('/contact', (req, res, next) => {
  res.render('contact', {
    title: 'Contact', 
    heading: 'CONTACT'
  });
});

/* Route for About page */
router.get('/about', (req, res, next) => {
  res.render('about', {
    title: 'About',
    heading: 'ABOUT'
  });
}); // The views are extracted from the router (controller). 

module.exports = router;
