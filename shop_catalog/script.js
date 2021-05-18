'use strict';

let brandDark = document.querySelector('.brand__burger');
let headerBars = document.querySelector('.header__navbar_burger');
let menuClose = document.querySelector('.brand__burger_close');

function toggleMenu() {
    brandDark.classList.toggle('brand__hidden');
}

headerBars.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);