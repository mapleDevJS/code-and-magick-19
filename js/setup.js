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

var renderWizard = function (wizard) {
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


var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarListElementSetup = document.querySelector('.setup-similar');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}
similarListElement.appendChild(fragment);

showElement(userDialog);
showElement(similarListElement);
showElement(similarListElementSetup);
