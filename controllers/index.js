var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/api/countries', require('./countryCtrlr'));

router.get('/', function(request, result){
  result.sendFile(path.join(__dirname + '/../client/build/index.html'));
});




module.exports = router;