import './style.css';
import { Layer } from '../Layer/index.js';

export const Drink = (props) => {
  const { name, ordered, layers, image } = props;
  const drinkElm = document.createElement('div');
  drinkElm.classList.add('drink');

  drinkElm.innerHTML = `  
  <div class="drink__product">
   <div class="drink__cup">
     <img
       src="${image}"
     />
   </div>
   <div class="drink__info">
      <h3>${name}</h3>
      
   </div>
 </div>
 <div class="drink__controls">
   <button class="order-btn">Objednat</button>
 </div>
</div>`;

  const layerElm = drinkElm.querySelector('.drink__info');
  layers.forEach((ite) => {
    layerElm.innerHTML += Layer(ite);
  });

  const orderBtn = drinkElm.querySelector('.order-btn');
  let order = ordered;

  orderBtn.addEventListener('click', () => {
    if (order === false) {
      orderBtn.textContent = `Zrušit`;
      drinkElm
        .querySelector('.drink__cup')
        .classList.add('drink__cup--selected');
      order = true;
    } else {
      orderBtn.textContent = `Objednat`;
      drinkElm
        .querySelector('.drink__cup')
        .classList.remove('drink__cup--selected');
      order = false;
    }
  });

  return drinkElm;
};
