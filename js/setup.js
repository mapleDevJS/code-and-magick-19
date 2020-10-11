'use strict';

(function () {
  const userDialog = document.querySelector('.setup');
  const similarListElement = userDialog.querySelector('.setup-similar-list');

  const form = document.querySelector('.setup-wizard-form');
  const similarListElementSetup = document.querySelector('.setup-similar');

  const setup = document.querySelector('.setup');
  const setupOpen = document.querySelector('.setup-open');
  const setupClose = setup.querySelector('.setup-close');

  window.utils.showElement(userDialog);
  window.utils.showElement(similarListElement);
  window.utils.showElement(similarListElementSetup);

  const onSetupOpenClick = function () {
    window.utils.openPopup();
  };

  const onEnterKeyDown = function (evt) {
    if (evt.key === window.utils.key.ENTER) {
      window.utils.openPopup();
    }
  };

  const onSetupCloseClick = function () {
    window.utils.closePopup();
  };

  const onSetupEnterKeyDown = function (evt) {
    if (evt.key === window.utils.key.ENTER) {
      window.utils.closePopup();
    }
  };

  const onFormSubmit = function (evt) {
    evt.preventDefault();
    window.backend.save(window.backend.serverUrl.PUSH, new FormData(form), window.utils.closePopup(), onError);
  };

  const onError = function (error) {
    window.utils.show(error);
  };

  setupOpen.addEventListener('click', onSetupOpenClick);
  setupOpen.addEventListener('keydown', onEnterKeyDown);
  setupClose.addEventListener('click', onSetupCloseClick);
  setupClose.addEventListener('keydown', onSetupEnterKeyDown);
  form.addEventListener('submit', onFormSubmit);
})();
