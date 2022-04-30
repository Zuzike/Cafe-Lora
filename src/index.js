import './style.css';
const navElm = document.querySelector('#nav-btn')

navElm.addEventListener('click', ()=>{
  const nav = document.querySelector('nav')
nav.classList.toggle('nav-closed');
})
