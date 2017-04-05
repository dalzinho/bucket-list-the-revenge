var express = require('express');
var bodyParser = require('body-parser');
var Country = require('../client/src/models/country');
var Query = require('../client/db/bucketQuery');

var query = new Query();


var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.get('/', function(request, res){
  query.all(function(result){
    res.json(result);
  })
});


router.post('/', function(req, res){

  var country = new Country(req.body);
  query.add(country, function(results){
    res.json(results);
  })
});

module.exports = router;