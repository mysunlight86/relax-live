const showMenu = () => {
  const popupDialogMenu = document.querySelector('.popup-dialog-menu');
  let isMenuOpened = false;
  // console.log(document.querySelectorAll('.no-overflow'));

  // switch menu
  const switchMenu = () => {
    if (isMenuOpened) {
      popupDialogMenu.style.right = `0`;
      popupDialogMenu.style.top = `0`;
      isMenuOpened = false;
    } else {
      const element = document.documentElement;
      if (element.clientWidth > 1024) {
        popupDialogMenu.style.right = `645px`;
      } else if (element.clientWidth > 575) {
        popupDialogMenu.style.right = `555px`;
      } else {
        popupDialogMenu.style.top = `100vh`;
      }
      isMenuOpened = true;
    }
  };

  // smooth scroll
  document.querySelector('body').addEventListener('click', event => {
    const target = event.target;
    try {
      if (target.classList.contains('menu') ||
      target.closest('.menu') !== null) {
        switchMenu();
        return;
      }
      if (!isMenuOpened) {
        if (target.closest('a') === null) {
          return;
        } else if (
          target.closest('a').tagName === 'A' &&
          target.closest('a').getAttribute('href').indexOf('#') === 0
        ) {
          event.preventDefault();
          const blockID = target.closest('a').getAttribute('href').substr(1);
          document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
        return;
      }
      if (
        target.closest('.close-menu') !== null &&
        target.closest('.popup-dialog-menu') !== null
      ) {
        switchMenu();
        return;
      }
      if (target.closest('a') === null) {
        return;
      } else if (
        target.closest('.popup-dialog-menu') === null ||
        target.closest('a').getAttribute('href') === '#' ||
        target.closest('a').getAttribute('href').indexOf('#') !== 0
      ) {
        switchMenu();
        return;
      } else if (target.tagName === 'A' && target.closest('.popup-dialog-menu')) {
        event.preventDefault();
        switchMenu();
        const blockID = target.closest('a').getAttribute('href').substr(1);
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        return;
      }
    } catch (error) {
      console.warn(error);
      return;
    }
  });
};

export default showMenu;
