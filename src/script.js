// const burgerMenu = document.getElementById('burger-menu');
// const burgerBtn = document.getElementById('burger-btn');

// burgerBtn.addEventListener('click', function () {
//     if (burgerMenu.style.display === 'block') {
//         burgerMenu.style.display = 'none';
//         document.body.style.overflow = 'auto';
//         document.documentElement.style.overflow = 'auto';
//         burgerBtn.src = "./src/images/burger.svg";
//     } else {
//         burgerMenu.style.display = 'block';
//         document.body.style.overflow = 'hidden';
//         document.documentElement.style.overflow = 'hidden';
//         burgerBtn.src = "./src/images/close.png";
//     }
// });
// Импортируем необходимые модули
/* JS */
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
});