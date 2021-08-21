'use strict';

// Icon Menu navigation

const menuIcon = document.querySelector('.header__menu-icon');
const navegation = document.querySelector('.header__nav');
const close = document.querySelector('.header__nav__close');

menuIcon.addEventListener('click', function () {
  navegation.style.left = '0';
});

close.addEventListener('click', function () {
  navegation.style.left = '100%';
});
