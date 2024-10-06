var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const params = req.query;
  res.status(200).send(params);
});

router.post('/name/course', function(req, res, next) {
  const data = req.body;
  res.status(200).send(data);
});

module.exports = router;
