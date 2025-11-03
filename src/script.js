const burgerMenu = document.getElementById('burger-menu');
const burgerBtn = document.getElementById('burger-btn');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('burger-overlay');

burgerBtn.addEventListener('click', function () {
    burgerMenu.classList.add('open');
    overlay.style.display = 'block';
    document.documentElement.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', function () {
    burgerMenu.classList.remove('open');
    overlay.style.display = 'none';
    document.documentElement.style.overflow = '';
});
overlay.addEventListener('click', function () {
    burgerMenu.classList.remove('open');
    overlay.style.display = 'none';
    document.documentElement.style.overflow = '';
});

import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
    modules: [Pagination],
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    centeredSlides: false,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        768: {
            enabled: false,
        }
    }
});