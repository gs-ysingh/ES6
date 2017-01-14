/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by YSingh on 14/01/17.
	 */

	var Person = __webpack_require__(1);
	var Product = __webpack_require__(2);

	var person = new Person("Yogesh Singh");

	document.write(person.toString());
	document.write("<br/>");
	document.write(Product(1, 2, 3, 4, 5));

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Person = function () {
		function Person(name) {
			_classCallCheck(this, Person);

			this.name = name;
		}

		_createClass(Person, [{
			key: "toString",
			value: function toString() {
				return this.name;
			}
		}, {
			key: "Name",
			get: function get() {
				return this.name;
			},
			set: function set(name) {
				this.name = name;
			}
		}]);

		return Person;
	}();

	;

	module.exports = Person;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/**
	 * Created by YSingh on 14/01/17.
	 */

	function product() {
	    for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
	        numbers[_key] = arguments[_key];
	    }

	    return numbers.reduce(function (acc, number) {
	        return acc * number;
	    }, 1);
	}

	function join(array1, array2) {
	    return [].concat(_toConsumableArray(array1), _toConsumableArray(array2));
	}

	function unshift(array) {
	    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	    }

	    return [].concat(args, _toConsumableArray(array));
	}

	module.exports = product;

/***/ }
/******/ ]);