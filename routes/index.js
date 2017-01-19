var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')[process.env.DB_ENV || 'development']);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lincoln\'s Url Shortifier!' });
});

router.get('/success', function (req, res, next) {
  res.render('success', {token: req.query.token})
})

router.post('/submit', function (req, res, next) {
  const token = randomString(12)
  knex('routes')
    .insert({
      token: token,
      target_url: req.body.target_url
    })
    .returning('*')
    .then(function (route) {
      console.log('successfully added', route);
      res.redirect(`/success?token=${token}`);
    })
    .catch(function (error) {
      console.log(error);
      res.render('oops', {error: "There was a problem generating your Shortified URL."})

    })
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
