'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_NUMBER = 4;

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

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateName(firstName, lastName) {
  return getRandomElement(firstName) + ' ' + getRandomElement(lastName);
}

function generateWizard(wizard) {
  wizard.name = generateName(WIZARD_NAMES, WIZARD_LAST_NAMES);
  wizard.coatColor = getRandomElement(COAT_COLORS);
  wizard.eyesColor = getRandomElement(EYES_COLORS);

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

var showElement = function (element) {
  element.classList.remove('hidden');
};

var renderWizards = function (wizards) {
  var fragment = document.createDocumentFragment();
  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(createWizard(wizards[j]));
  }
  similarListElement.appendChild(fragment);
};

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
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
var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var setupPlayer = document.querySelector('.setup-player');

renderWizards(wizards);

showElement(userDialog);
showElement(similarListElement);
showElement(similarListElementSetup);

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

wizardCoat.addEventListener('click', function () {
  var currentColor = getRandomElement(COAT_COLORS);
  wizardCoat.style.fill = currentColor;
  setup.querySelector('input[name=coat-color]').value = currentColor;
});

wizardEyes.addEventListener('click', function () {
  var currentColor = getRandomElement(EYES_COLORS);
  wizardEyes.style.fill = currentColor;
  setup.querySelector('input[name=eyes-color]').value = currentColor;
});

wizardFireball.addEventListener('click', function () {
  var currentColor = getRandomElement(FIREBALL_COLORS);
  wizardFireball.style.background = currentColor;
  setup.querySelector('input[name=fireball-color]').value = currentColor;
});
