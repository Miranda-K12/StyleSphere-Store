'use strict';
//Burger menu
const hamburger = document.getElementById('hamburger');
const burgerMenu = document.getElementById('burger-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    burgerMenu.classList.toggle('active'); 
});



const closeBtns = document.querySelectorAll("#burger-menu a"); 
closeBtns.forEach(function(link) {
    link.addEventListener("click", function(e) {
        burgerMenu.classList.remove("active"); 
        hamburger.classList.remove("active");  
    });
});

// FAQ Accordion 
const box = document.querySelectorAll('.box');
  box.forEach(function (item) {
    item.addEventListener('click', function () {
        const answer = this.querySelector('.answer');
        const icon = this.querySelector('.icon');
        if (answer) {
            answer.classList.toggle('display-answer');
        }
        if (icon) {
            if (icon.src.includes("images/icons/down-arrow.svg")) {
                icon.src = "images/icons/up-arrow.svg";
            } else {
                 icon.src = "images/icons/down-arrow.svg";
            } 
            }
    });
});
