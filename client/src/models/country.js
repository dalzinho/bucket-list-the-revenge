var Country = function(options){
  this.name = options.name;
  this.capital = options.capital;
  this.region = options.region;
  this.latlng = options.latlng;
  // this.currency = options.currencies[0].name;
  // this.language = options.languages[0].name;
  this.todo = [];

}

module.exports = Country;