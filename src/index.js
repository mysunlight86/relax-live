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

maskPhone('input[name="phone"]', '+7 (___) ___-__-__');
phoneList();
showMenu();
togglePopup('.link-list', '.popup-repair-types');
togglePopup('.link-privacy', '.popup-privacy');
