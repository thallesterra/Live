const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

// router.get('/about', function(req, res, next) {
//   res.render('about', {page:'About Us', menuId:'about'});
// });

// router.get('/contact', function(req, res, next) {
//   res.render('contact', {page:'Contact Us', menuId:'contact'});
// });

module.exports = router;
