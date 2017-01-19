var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')[process.env.DB_ENV || 'development']);

/* GET users listing. */
router.get('/:token', function(req, res, next) {
  // add invalid token error handling
  knex('routes')
    .where({token: req.params.token})
    .select('target_url')
    .then(function(url){
      console.log(url);
      if(url.length !== 0) {
        const target = url[0].target_url
        res.redirect(target)
      } else {
        res.render('oops', {error: "Looks like that is not a valid Shortified URL!"})
      }
    })
});

module.exports = router;
