var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '' });
});
/* page2 */
router.get('/homePage', function(req, res, next) {
    res.render('homePage', { title: 'TradeNinja' });
});
router.get('/GetStarted', function(req, res, next) {
    res.render('GetStarted', { title: 'GetStarted' });
});
router.get('/example', function(req, res, next) {
    res.render('example', { title: 'example' });
});
module.exports = router;
