import './style.css';
import { Layer } from './Layer/index.js';

const navElm = document.querySelector('#nav-btn');
const nav = document.querySelector('nav');

const hideNavigation = () => {
  nav.classList.toggle('nav-closed');
};

navElm.addEventListener('click', hideNavigation); /*() => {
  hideNavigation()
});*/

const navContentArray = document.querySelectorAll('a');

navContentArray.forEach((item) => {
  item.addEventListener('click', hideNavigation);
});
/*() => {hideNavigation()}//);});*/

const orderBtn = document.querySelector('.order-btn');
let order = false;

orderBtn.addEventListener('click', () => {
  //console.log('1', order);
  if (order === false) {
    orderBtn.textContent = `Zrušit`;
    document.querySelector('.drink__cup').classList.add('drink__cup--selected');
    order = true;
    //console.log('2', order);
  } else {
    //console.log('3', order);
    orderBtn.textContent = `Objednat`;
    document
      .querySelector('.drink__cup')
      .classList.remove('drink__cup--selected');
    order = false;
  }
});

const layerCappucino = [
  {
    color: '#feeeca',
    label: 'mléčná, pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

const layerElm = document.querySelector('.drink__info');

for (let i = 0; i < layerCappucino.length; i += 1) {
  layerElm.innerHTML += Layer(layerCappucino[i]);
}
