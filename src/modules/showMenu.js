const showMenu = () => {
  document.querySelector('.menu').addEventListener('click', () => {
    const popupDialogMenu = document.querySelector('.popup-dialog-menu');
    const element = document.documentElement;
    if (element.clientWidth > 1024) {
      popupDialogMenu.style.right = `645px`;
    } else if (element.clientWidth > 575) {
      popupDialogMenu.style.right = `555px`;
    } else {
      popupDialogMenu.style.top = `100vh`;
    }
  });
};

export default showMenu;
