var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lincoln\'s Url Shortifier!' });
});

router.get('/success', function (req, res, next) {
  res.render('success', {token: req.query.token})
})


router.post('/submit', function (req, res, next) {
  let links = {}
  links.target_url = req.body.target_url
  links.token = randomString(12)
  console.log(links);
  res.redirect(`/success?token=${links.token}`);



})
module.exports = router;



function randomString(length) {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
