var getRequest = require('./makeGetRequest');

var CountryList = function(){
  var restCountriesAll = 'https://restcountries.eu/rest/v2/all'
  getRequest(restCountriesAll, this.populate);
};

CountryList.prototype = {
  populate: function(){
    if(this.status !== 200){
      return;
    }
    var jsonString = this.responseText;
    var countriesJson = JSON.parse(jsonString);

    var selector = document.querySelector('#country-picker');
    countriesJson.forEach(function(country){
      var option = document.createElement('option');
      option.innerText = country.name;
      selector.appendChild(option);
    })

    }
  }



module.exports = CountryList;
