var makePostRequest = function(url,payload){
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(payload);
};

module.exports = makePostRequest;