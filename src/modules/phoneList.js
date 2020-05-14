const phoneList = () => {
  document.querySelector('.header-contacts__arrow').addEventListener('click', event => {
    const phoneNumAcc = document.querySelector('.header-contacts__phone-number-accord');
    phoneNumAcc.classList.toggle('header-accord-active');
    event.target.closest('.header-contacts__arrow').classList.toggle('header-accord-arrow-active');
  });
};

export default phoneList;
