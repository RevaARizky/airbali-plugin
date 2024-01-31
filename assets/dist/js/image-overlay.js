/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./src/js/blocks/image-overlay.js ***!
  \****************************************/
(function ($) {
  document.addEventListener("DOMContentLoaded", function () {
    var mainel = document.querySelectorAll('.image-overlay-block.custom-block');
    if (!mainel.length) {
      return false;
    }
    var minHeight = 0;
    mainel.forEach(function (el) {
      var triggerButton = el.querySelector('.overlay-button-trigger');
      var imageWrapper = el.querySelector('.image-wrapper');
      triggerButton.addEventListener('click', function () {
        if (imageWrapper.classList.contains('active')) {
          imageWrapper.classList.remove('active');
        } else {
          imageWrapper.classList.add('active');
        }
      });
      if (jQuery(el).siblings().css('height') > minHeight) {
        minHeight = jQuery(el).siblings().css('height');
      }
    });
    mainel.forEach(function (el) {
      jQuery(el).siblings().css('height', "".concat(minHeight, "px"));
    });
  });
})(jQuery);
/******/ })()
;