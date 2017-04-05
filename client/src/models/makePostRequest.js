var makePostRequest = function(url, callback, payload){
  var request = new XMLHttpRequest();
  request.open('POST', url);
  request.setRequestHeader("Content-type", "application/json");
  request.onload = callback;
  request.send(payload);
};

module.exports = makePostRequest;