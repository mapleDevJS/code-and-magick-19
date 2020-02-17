'use strict';

(function () {
  var KEY = {
    ESCAPE: 'Escape',
    ENTER: 'Enter'
  };

  var setup = document.querySelector('.setup');

  var getRandomElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var getMultipleRandomElements = function (array, n) {
    var originalArray = array;
    var modifiedArray = [];
    for (var i = 0; i < n; i++) {
      var element = getRandomElement(originalArray);
      modifiedArray.push(element);
      var index = originalArray.indexOf(element);
      originalArray.splice(index, 1);
    }

    return modifiedArray;
  };

  var showElement = function (element) {
    element.classList.remove('hidden');
  };

  var onPopupEscPress = function (evt) {
    if (evt.key === KEY.ESCAPE) {
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    setup.removeAttribute('style');
  };

  window.utils = {
    KEY: KEY,
    getRandomElement: getRandomElement,
    getMultipleRandomElements: getMultipleRandomElements,
    showElement: showElement,
    openPopup: openPopup,
    closePopup: closePopup
  };
})();
