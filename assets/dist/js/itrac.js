/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/js/blocks/itrac.js ***!
  \********************************/
(function ($) {
  document.addEventListener("DOMContentLoaded", function () {
    var mainel = document.querySelector('.itrac-block');
    if (!mainel) {
      return false;
    }
    mainel.querySelectorAll('.icon-popup-trigger').forEach(function (el) {
      el.addEventListener('click', function () {
        var content = JSON.parse(el.dataset.content);
        var popup = mainel.querySelector('.popup-target');
        popup.querySelector('.image-target').src = content.contentImage.url;
        popup.querySelector('.title-target').innerHTML = content.title;
        popup.querySelector('.content-target').innerHTML = content.contentDescription;
        popup.classList.remove('hidden');
      });
    });
    var hidePopup = function hidePopup() {
      var popup = mainel.querySelector('.popup-target');
      popup.classList.add('hidden');
      popup.querySelector('.image-target').src = '';
      popup.querySelector('.title-target').innerHTML = '';
      popup.querySelector('.content-target').innerHTML = '';
    };
    mainel.querySelector('.popup-target .overlay').addEventListener('click', function (e) {
      hidePopup();
    });
    mainel.querySelector('.popup-target .close-button').addEventListener('click', function (e) {
      hidePopup();
    });
  });
})(jQuery);
/******/ })()
;