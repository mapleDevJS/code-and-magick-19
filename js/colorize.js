'use strict';

(function () {
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var setup = document.querySelector('.setup');
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  wizardCoat.addEventListener('click', function () {
    var currentColor = window.utils.getRandomElement(COAT_COLORS);
    wizardCoat.style.fill = currentColor;
    setup.querySelector('input[name=coat-color]').value = currentColor;
  });

  wizardEyes.addEventListener('click', function () {
    var currentColor = window.utils.getRandomElement(EYES_COLORS);
    wizardEyes.style.fill = currentColor;
    setup.querySelector('input[name=eyes-color]').value = currentColor;
  });

  wizardFireball.addEventListener('click', function () {
    var currentColor = window.utils.getRandomElement(FIREBALL_COLORS);
    wizardFireball.style.background = currentColor;
    setup.querySelector('input[name=fireball-color]').value = currentColor;
  });

  window.colorize = {
    COAT_COLORS: COAT_COLORS,
    EYES_COLORS: EYES_COLORS,
    FIREBALL_COLORS: FIREBALL_COLORS
  };
})();
