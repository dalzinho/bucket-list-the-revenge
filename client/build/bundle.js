/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var UI = __webpack_require__(1);

var app = function(){
  new UI();
};

window.onload = app;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var CountryList = __webpack_require__(3);
countryList = new CountryList();

var UI = function(){
  countryList.populate();
};

UI.prototype = {

};

module.exports = UI;

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var getRequest = __webpack_require__(4);

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
    console.log('todos los países', countriesJson);

    var selector = document.querySelector('#country-picker');
    countriesJson.forEach(function(country){
      var option = document.createElement('option');
      option.innerText = country.name;
      selector.appendChild(option);
    })

    }
  }



module.exports = CountryList;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var makeGetRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = callback;
  request.send();
};

module.exports = makeGetRequest;










/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map