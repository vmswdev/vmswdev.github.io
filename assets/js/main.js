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
/*
$('.vmsw__what__title--wrap').click(function(){

    var target = $(this).data('target');

    if(target){
        $('.vmsw__what__info').filter(target).toggle('hide');
        $('.vmsw__what__title').filter(target).toggle('hide');
    }

});
$('.vmsw__what__info__wrap').click(function(){

    var target = $(this).data('target');

    if(target){
        $('.vmsw__what__info').filter(target).toggle('hide');
        $('.vmsw__what__title').filter(target).toggle('hide');
    }
});


 */


window.onload = function () {
  var date = new Date().getFullYear();
  document.getElementById("year").innerHTML = date;
};

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

},[[0,"/js/manifest","/js/vendor"]]]);