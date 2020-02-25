'use strict';

(function () {

  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');

  var form = document.querySelector('.setup-wizard-form');
  var similarListElementSetup = document.querySelector('.setup-similar');

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  window.utils.showElement(userDialog);
  window.utils.showElement(similarListElement);
  window.utils.showElement(similarListElementSetup);

  var onSetupOpenClick = function () {
    window.utils.openPopup();
  };

  var onEnterKeyDown = function (evt) {
    if (evt.key === window.utils.key.ENTER) {
      window.utils.openPopup();
    }
  };

  var onSetupCloseClick = function () {
    window.utils.closePopup();
  };

  var onSetupEnterKeyDown = function (evt) {
    if (evt.key === window.utils.key.ENTER) {
      window.utils.closePopup();
    }
  };

  var onFormSubmit = function (evt) {
    evt.preventDefault();
    window.backend.save(window.backend.serverUrl.PUSH, new FormData(form), window.utils.closePopup(), onError);
  };

  var onError = function (error) {
    window.utils.show(error);
  };

  setupOpen.addEventListener('click', onSetupOpenClick);
  setupOpen.addEventListener('keydown', onEnterKeyDown);
  setupClose.addEventListener('click', onSetupCloseClick);
  setupClose.addEventListener('keydown', onSetupEnterKeyDown);
  form.addEventListener('submit', onFormSubmit);

})();
