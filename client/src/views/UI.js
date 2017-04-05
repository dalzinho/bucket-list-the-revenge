var CountryList = require('../models/CountryList');
countryList = new CountryList();

var UI = function(){
  countryList.populate();
};

UI.prototype = {

};

module.exports = UI;