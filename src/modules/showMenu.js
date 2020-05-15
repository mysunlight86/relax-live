const showMenu = () => {
  const popupDialogMenu = document.querySelector('.popup-dialog-menu');

  // open menu
  document.querySelector('.menu').addEventListener('click', () => {
    const element = document.documentElement;
    if (element.clientWidth > 1024) {
      popupDialogMenu.style.right = `645px`;
    } else if (element.clientWidth > 575) {
      popupDialogMenu.style.right = `555px`;
    } else {
      popupDialogMenu.style.top = `100vh`;
    }
  });

  // smooth scroll
  document.querySelector('body').addEventListener('click', event => {
    const target = event.target;
    try {
      const blockID = target.getAttribute('href').substr(1);
      if (
        target.closest('a').tagName === 'A' &&
        target.closest('a').getAttribute('href').indexOf('#') === 0
      ) {
        event.preventDefault();
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        popupDialogMenu.style.right = `0`;
        return;
      }
    } catch (error) {
      return;
    }
  });
};

export default showMenu;
