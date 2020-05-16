const repairTypes = () => {
  const popupLinks = document.querySelectorAll('.link-list');
  const popupWindow = document.querySelector('.popup-repair-types');

  // show popup
  // const showPopup = () => {
  //   popupWindow.style.visibility = 'visible';
  // };

  popupLinks.forEach(elem => elem.addEventListener('click', () => popupWindow.style.visibility = 'visible'));

  // hide popup
  popupWindow.addEventListener('click', event => {
    let target = event.target;

    if (target.classList.contains('close')) {
      popupWindow.style.visibility = 'hidden';
    } else {
      target = target.closest('.popup-dialog-repair-types');

      if (!target) {
        popupWindow.style.visibility = 'hidden';
      }
    }
  });
};

export default repairTypes;
