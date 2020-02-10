'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARDS_NUMBER = 4;

  function generateName(firstName, lastName) {
    return window.utils.getRandomElement(firstName) + ' ' + window.utils.getRandomElement(lastName);
  }

  function generateWizard(wizard) {
    wizard.name = generateName(WIZARD_NAMES, WIZARD_LAST_NAMES);
    wizard.coatColor = window.utils.getRandomElement(window.colorize.COAT_COLORS);
    wizard.eyesColor = window.utils.getRandomElement(window.colorize.EYES_COLORS);

    return wizard;
  }

  var createWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };


  var getWizards = function () {
    var wizards = [];

    for (var i = 0; i < WIZARDS_NUMBER; i++) {
      var wizard = {};
      wizards[i] = (generateWizard(wizard));
    }
    return wizards;
  };

  var renderWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var j = 0; j < wizards.length; j++) {
      fragment.appendChild(createWizard(wizards[j]));
    }
    similarListElement.appendChild(fragment);
  };

  var wizards = getWizards();

  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarListElementSetup = document.querySelector('.setup-similar');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');


  renderWizards(wizards);

  window.utils.showElement(userDialog);
  window.utils.showElement(similarListElement);
  window.utils.showElement(similarListElementSetup);

  setupOpen.addEventListener('click', function () {
    window.utils.openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === window.utils.ENTER_KEY) {
      window.utils.openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    window.utils.closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === window.utils.KEY.ENTER) {
      window.utils.closePopup();
    }
  });
})();
