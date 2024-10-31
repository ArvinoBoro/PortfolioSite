const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const router = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // If the path is not provided assume the file is in the 'views' directory.
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // If the path is not provided assume the static file is in the 'public' directory.
app.use(express.static(path.join(__dirname, 'node_modules'))); // If the path is not provided assume the static file is in the 'node_modules' directory.

app.use('/', router);
app.use('/home', router); 
app.use('/projects', router);
app.use('/contact', router);
app.use('/about', router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {
    title: 'Error',
    heading: 'ERROR'
  });
});

module.exports = app;
