'use strict';
//Burger menu
const hamburger = document.getElementById('hamburger');
const burgerMenu = document.getElementById('burger-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    burgerMenu.classList.toggle('active'); 
});


