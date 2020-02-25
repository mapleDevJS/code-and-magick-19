'use strict';

(function () {
  var key = {
    ESCAPE: 'Escape',
    ENTER: 'Enter'
  };

  var show = function (error) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = error;
    document.body.insertAdjacentElement('afterbegin', node);
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
    if (evt.key === key.ESCAPE) {
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
    key: key,
    show: show,
    getRandomElement: getRandomElement,
    getMultipleRandomElements: getMultipleRandomElements,
    showElement: showElement,
    openPopup: openPopup,
    closePopup: closePopup
  };
})();
