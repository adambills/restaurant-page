import './style.scss';
import generateHeaderFooter from './header-footer.js';
import generateHomePage from './home.js';
import generateMenu from './menu.js';
import generateContactPage from './contact.js';

generateHeaderFooter();
generateHomePage();

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');

homeBtn.addEventListener('click', generateHomePage);
menuBtn.addEventListener('click', generateMenu);
contactBtn.addEventListener('click', generateContactPage);




