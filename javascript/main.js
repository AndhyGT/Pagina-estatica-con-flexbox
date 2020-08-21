'use strict'

document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.nav-menu').classList.toggle('show'); 
});

ScrollReveal().reveal('.one');
ScrollReveal().reveal('.new-cards', { delay: 500 });
ScrollReveal().reveal('.section', { delay: 500 });
ScrollReveal().reveal('.two', { delay: 500 });
ScrollReveal().reveal('.secundario', { delay: 500})