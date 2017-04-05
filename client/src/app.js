var CountrySelector = require('./views/CountrySelector');
var addToList = require('./views/addToList');

var app = function(){
  new CountrySelector();
  new addToList();
};

window.onload = app;