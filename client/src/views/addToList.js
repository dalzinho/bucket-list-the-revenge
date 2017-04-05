var makePostRequest = require('../models/makePostRequest');
var makeGetRequest = require('../models/makeGetRequest');

var AddToList = function(){
  var selector = document.querySelector('#country-picker');
  var button = document.querySelector('#btn-select-country');


  button.onclick = function(){

    var restUrl = 'http://restcountries.eu/rest/v2/name/' + selector.value;
    makeGetRequest(restUrl, function(req, res){

      var jsonObject = JSON.parse(this.responseText);
      console.log(jsonObject);

      makePostRequest('/api/countries', jsonObject);

    });




  };
};

module.exports = AddToList;