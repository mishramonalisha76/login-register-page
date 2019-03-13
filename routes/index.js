var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/signin', function(req, res) {
  res.render('login');
});
router.get('/userprofile', function(req, res) {
  res.render('profile');
});
router.get('/signup',function(req,res){
  res.redirect("/userprofile");
})
router.get('/profile',function(req,res){
  res.redirect("/userprofile");
})
router.get('/loginhere',function(req,res){
  res.redirect("/signin");
})

module.exports = router;
