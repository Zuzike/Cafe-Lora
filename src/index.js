import './style.css';
//import { Layer } from './Layer/index.js';
import { Drink } from './Drink/index.js';

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

/*const orderBtn = document.querySelector('.order-btn');
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

const layers = [
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
/*for (let i = 0; i < layers.length; i += 1) {
  layerElm.innerHTML += Layer(layers[i]);
}
layers.forEach((ite) => {
  layerElm.innerHTML += Layer(ite);
});*/

const drink = {
  id: 'romano',
  name: 'Romano',
  ordered: false,
  layers: [
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ],
  image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
};

const drinksListElm = document.querySelector('.drinks-list');
drinksListElm.appendChild(Drink(drink));
