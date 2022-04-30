import './style.css';
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
  if (order === true) {
    orderBtn.textContent = `Zrušit`;
    document.querySelector('.drink__cup').classList.add('drink__cup--selected');
    order = false;
    //console.log('2', order);
  } else {
    //console.log('3', order);
    orderBtn.textContent = `Objednat`;
    document
      .querySelector('.drink__cup')
      .classList.remove('drink__cup--selected');
    order = true;
  }
});
