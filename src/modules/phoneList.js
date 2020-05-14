const phoneList = () => {
  document.querySelector('.header-contacts__phone-number-accord').style.top = '0';
  document.querySelector('.header-contacts__arrow').addEventListener('click', event => {
    // console.log(event.target.closest('.header-contacts__arrow'));
    const phoneNumAcc = document.querySelector('.header-contacts__phone-number-accord');
    if (phoneNumAcc.style.top !== '25px') {
      event.target.closest('.header-contacts__arrow').style.transform = `rotate(180deg)`;
      phoneNumAcc.style.top = '25px';
      phoneNumAcc.children[0].style.opacity = '1';
      phoneNumAcc.style.width = '100%';
    } else {
      event.target.closest('.header-contacts__arrow').style.transform = `rotate(0deg)`;
      phoneNumAcc.style.top = '0';
      phoneNumAcc.children[0].style.opacity = '0';
    }
  });
};

export default phoneList;
