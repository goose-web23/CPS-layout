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

// скролл-лента в services
const servicesSlides = document.querySelectorAll('.services__container--slide');
const servicesContainer = document.querySelector('.services__container')
servicesSlides.forEach(slide => {
    slide.addEventListener('click', () => showActive(slide))
})
function showActive(curSlide) {
    servicesSlides.forEach(slide => {
        slide.classList.remove('services-active')
    })
    curSlide.classList.add('services-active')
    servicesContainer.scrollLeft = curSlide.offsetLeft;
}

// Отдельно для каждого меню
const burgerLinks = document.querySelectorAll('#burger-menu .burger-menu__list--link');
burgerLinks.forEach(link => {
    link.addEventListener('click', function () {
        burgerLinks.forEach(item => {
            item.classList.remove('burger-active');
        });
        this.classList.add('burger-active');
    });
});

const sidebarLinks = document.querySelectorAll('.sidebar .burger-menu__list--link');
sidebarLinks.forEach(link => {
    link.addEventListener('click', function () {
        sidebarLinks.forEach(item => {
            item.classList.remove('sidebar-active');
        })
        this.classList.add('sidebar-active')
    })
})