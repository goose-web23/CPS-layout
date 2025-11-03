const burgerMenu = document.getElementById('burger-menu');
const burgerBtn = document.getElementById('burger-btn');
const burgerSearch = document.querySelector('.burger-search');
const burgerHidden = document.querySelectorAll('.burger-hidden');
const divider = document.querySelector('.header__navigation--divider');

burgerBtn.addEventListener('click', function () {
    if (burgerMenu.style.display === 'block') {
        burgerMenu.style.display = 'none';
        burgerBtn.src = "./src/images/burger.svg";
        burgerSearch.style.display = 'none';
        burgerHidden.forEach(el => {
            el.style.display = 'flex';
        })
        divider.style.display = 'block';
    } else {
        burgerMenu.style.display = 'block';
        burgerBtn.src = "./src/images/close.png";
        burgerSearch.style.display = 'flex';
        burgerHidden.forEach(el => {
            el.style.display = 'none';
        })
        divider.style.display = 'none';
    }
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