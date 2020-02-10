'use strict';

(function () {
  var KEY = {
    ESCAPE: 'Escape',
    ENTER: 'Enter'
  };

  var setup = document.querySelector('.setup');

  var getRandomElement = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
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
    showElement: showElement,
    openPopup: openPopup,
    closePopup: closePopup
  };
})();
