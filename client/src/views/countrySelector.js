var CountryList = require('../models/CountryList');
countryList = new CountryList();

var CountrySelector = function(){
  countryList.populate();
};

CountrySelector.prototype = {

};

module.exports = CountrySelector;