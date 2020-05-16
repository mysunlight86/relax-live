const togglePopup = (linksSelector, windowSelector) => {
  const linksPopup = document.querySelectorAll(linksSelector);
  const windowPopup = document.querySelector(windowSelector);

  // show popup
  linksPopup.forEach(elem => elem.addEventListener('click', () => windowPopup.style.visibility = 'visible'));

  // hide popup
  windowPopup.addEventListener('click', event => {
    let target = event.target;

    if (target.classList.contains('close')) {
      windowPopup.style.visibility = 'hidden';
    } else {
      target = target.closest('.popup-dialog');

      if (!target) {
        windowPopup.style.visibility = 'hidden';
      }
    }
  });
};

export default togglePopup;
