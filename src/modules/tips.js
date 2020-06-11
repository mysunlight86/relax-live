const tips = () => {
  // document.querySelector('.popup-portfolio').style.visibility = 'visible';
  const icon = document.querySelectorAll('.formula-item__icon');
  console.log(icon);
  // console.log(icon.children);
  icon[0].children[0].style.visibility = 'visible';
  icon[0].children[0].style.opacity = '1';
  console.log(icon[0].children[0].clientHeight);
  console.log(icon[0].children[0].getBoundingClientRect().top);
  if (icon[0].children[0].getBoundingClientRect().top < 0) {
    icon[0].children[0].style.bottom = '-215px';
  }
  // console.log(icon[0].getBoundingClientRect());
  // console.log(document.documentElement.scrollTop);
  // console.log(icon[0].clientHeight);
  console.log('123');
};

export default tips;
