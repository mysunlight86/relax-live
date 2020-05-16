import "@babel/polyfill";
import elementClosest from 'element-closest';
elementClosest(window);

import smoothscroll from 'smoothscroll-polyfill';
// kick off the polyfill!
smoothscroll.polyfill();

import maskPhone from './modules/maskPhone';
import phoneList from './modules/phoneList';
import showMenu from './modules/showMenu';
import togglePopup from './modules/togglePopup';
import Validator from './modules/validator';

maskPhone('input[name="phone"]');
phoneList();
showMenu();
togglePopup('.link-list', '.popup-repair-types');
togglePopup('.link-privacy', '.popup-privacy');

// Validate
const form1 = new Validator({
  selector: '#feedback1',
  method: {
    'checkbox1': [
      ['notChecked']
    ]
  }
});
form1.init();

const form2 = new Validator({
  selector: '#feedback2',
  method: {
    'checkbox2': [
      ['notChecked']
    ]
  }
});
form2.init();

const form3 = new Validator({
  selector: '#feedback3',
  method: {
    'checkbox3': [
      ['notChecked']
    ]
  }
});
form3.init();

const form4 = new Validator({
  selector: '#feedback4',
  method: {
    'checkbox4': [
      ['notChecked']
    ]
  }
});
form4.init();

const form5 = new Validator({
  selector: '#feedback5',
  method: {
    'checkbox5': [
      ['notChecked']
    ]
  }
});
form5.init();
