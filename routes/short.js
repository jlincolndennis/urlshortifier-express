var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')[process.env.DB_ENV || 'development']);

/* GET users listing. */
router.get('/:token', function(req, res, next) {
  knex('routes')
    .where({token: req.params.token})
    .select('target_url')
    .then(function(url){
      const target = url[0].target_url
      res.redirect(target)

      // res.json({token: `${req.params.token}`,
      //           target_url: `${target}`})
    })
});

module.exports = router;
