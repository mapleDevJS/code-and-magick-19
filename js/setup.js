'use strict';

(function () {
  // var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  // var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARDS_NUMBER = 4;

  // function generateName(firstName, lastName) {
  //   return window.utils.getRandomElement(firstName) + ' ' + window.utils.getRandomElement(lastName);
  // }

  // function generateWizard(wizard) {
  //   wizard.name = generateName(WIZARD_NAMES, WIZARD_LAST_NAMES);
  //   wizard.coatColor = window.utils.getRandomElement(window.colorize.COAT_COLORS);
  //   wizard.eyesColor = window.utils.getRandomElement(window.colorize.EYES_COLORS);
  //
  //   return wizard;
  // }

  var createWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };


  var getWizards = function (data) {
    var wizards = window.utils.getMultipleRandomElements(data, WIZARDS_NUMBER);

    //
    // for (var i = 0; i < WIZARDS_NUMBER; i++) {
    //   wizards[i] = window.utils.getMultipleRandomElements(data, WIZARDS_NUMBER);
    // }
    return wizards;
  };

  var renderWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var j = 0; j < wizards.length; j++) {
      fragment.appendChild(createWizard(wizards[j]));
    }
    similarListElement.appendChild(fragment);
  };

  var userDialog = document.querySelector('.setup');
  var form = document.querySelector('.setup-wizard-form');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarListElementSetup = document.querySelector('.setup-similar');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  var onSuccess = function (data) {
    var wizards = getWizards(data);
    renderWizards(wizards);
  };

  var onError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(onSuccess, onError);

  window.utils.showElement(userDialog);
  window.utils.showElement(similarListElement);
  window.utils.showElement(similarListElementSetup);

  setupOpen.addEventListener('click', function () {
    window.utils.openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === window.utils.KEY.ENTER) {
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

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), window.utils.closePopup(), onError);
  });

})();
