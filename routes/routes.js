const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('courses');
});

router.get('/courses', function(req, res, next) {
  res.render('courses');
});

router.get('/employees', function(req, res, next) {
  res.render('employees');
});

module.exports = router;
