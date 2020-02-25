'use strict';

(function () {
  var WIZARDS_NUMBER = 4;

  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var setup = document.querySelector('.setup-wizard');
  var coat = setup.querySelector('.wizard-coat');
  var eyes = setup.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

  var colors = {
    COAT: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ],
    EYES: [
      'black',
      'red',
      'blue',
      'yellow',
      'green'
    ],
    FIREBALL: [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ],
  };

  var coatColor;
  var eyesColor;
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var create = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var render = function () {
    similarListElement.innerHTML = '';
    var fragment = document.createDocumentFragment();
    for (var j = 0; j < WIZARDS_NUMBER; j++) {
      fragment.appendChild(create(wizards[j]));
    }

    similarListElement.appendChild(fragment);
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var rank = function (left, right) {
    var rankDiff = getRank(right) - getRank(left);
    if (rankDiff === 0) {
      rankDiff = namesComparator(left.name, right.name);
    }
    return rankDiff;
  };

  var update = function () {
    wizards = wizards.slice().sort(rank);
    render(wizards);
  };

  var onCoatClick = function () {
    var currentCoatColor = window.utils.getRandomElement(colors.COAT);
    coat.style.fill = currentCoatColor;
    document.querySelector('input[name=coat-color]').value = currentCoatColor;
    coatColor = currentCoatColor;
    update();
  };

  var onEyesClick = function () {
    var currentEyesColor = window.utils.getRandomElement(colors.EYES);
    eyes.style.fill = currentEyesColor;
    document.querySelector('input[name=eyes-color]').value = currentEyesColor;
    eyesColor = currentEyesColor;
    update();
  };

  var onFireballClick = function () {
    var currentFireballColor = window.utils.getRandomElement(colors.FIREBALL);
    fireball.style.background = currentFireballColor;
    document.querySelector('input[name=fireball-color]').value = currentFireballColor;
  };

  var onSuccess = function (data) {
    wizards = data;
    update();
  };

  var onError = function (error) {
    window.utils.show(error);
  };

  coat.addEventListener('click', window.debounce(onCoatClick));
  eyes.addEventListener('click', window.debounce(onEyesClick));
  fireball.addEventListener('click', onFireballClick);

  window.backend.load(window.backend.serverUrl.GET, onSuccess, onError);

  window.wizards = {
    wizards: wizards,
    update: update
  };
})();
