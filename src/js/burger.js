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