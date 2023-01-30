(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/main"],{

/***/ "./source/js/main.js":
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

var text = $('.typewriter').text();
var length = text.length;
var timeOut;
var character = 0;

(function typeWriter() {
  timeOut = setTimeout(function () {
    character++;
    var type = text.substring(0, character);
    $('.typewriter').text(type);
    typeWriter();

    if (character == length) {
      clearTimeout(timeOut);
    }
  }, 90);
})();

$('.vmsw__what__title--wrap').click(function () {
  var target = $(this).data('target');
  console.log(target);
  console.log(this);

  if (target) {
    $('.vmsw__what__info').filter(target).toggle('hide');
    $('.vmsw__what__title').filter(target).toggle('hide');
  }
});
$('.vmsw__what__info__wrap').click(function () {
  var target = $(this).data('target');
  console.log(target);
  console.log(this);

  if (target) {
    $('.vmsw__what__info').filter(target).toggle('hide');
    $('.vmsw__what__title').filter(target).toggle('hide');
  }
});
/*
// List of sentences
var _CONTENT = [
	"Twinkle, twinkle, little star",
	"How I wonder what you are",
	"Up above the world so high",
	"Like a diamond in the sky"
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() {
	// Get substring with 1 characater added
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		// Hide the cursor
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;

		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);
 */

/***/ }),

/***/ "./source/scss/style.scss":
/*!********************************!*\
  !*** ./source/scss/style.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi ./source/js/main.js ./source/scss/style.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/amowhi/Sites/vmsw.test/source/js/main.js */"./source/js/main.js");
module.exports = __webpack_require__(/*! /Users/amowhi/Sites/vmsw.test/source/scss/style.scss */"./source/scss/style.scss");


/***/ })

},[[0,"/js/manifest"]]]);