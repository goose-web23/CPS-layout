//тект о нас возле картинки
const aboutCont = document.querySelector('.about-text');
const showMoreAbout = document.getElementById('about-more');
const arrow = showMoreAbout.querySelector('img');
const text = showMoreAbout.querySelector('p');

let isOpenAbout = false;

showMoreAbout.addEventListener('click', function () {
    if (!isOpenAbout) {
        aboutCont.innerHTML += '<p class="added-text">Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.</p>';
        arrow.style.transform = 'rotate(180deg)';
        text.textContent = 'Скрыть';
        isOpenAbout = true;
    } else {
        aboutCont.querySelector('.added-text').remove();
        arrow.style.transform = 'rotate(0deg)';
        text.textContent = 'Читать далее';
        isOpenAbout = false;
    }
});

//там где бренды
const brandCont = document.querySelector('.brandCont');
const showMoreBrand = document.getElementById('moreBrand');
const brandArrow = showMoreBrand.querySelector('img');
const brandText = showMoreBrand.querySelector('p');

let isOpenBrand = false;

showMoreBrand.addEventListener('click', function () {
    if (!isOpenBrand) {
        brandCont.innerHTML += `
        <div class="swiper-slide repair__container--slideBrand added-brand">
            <img class="logo-company" src="./src/images/dell.png">
            <button class="go-btn"><img src="./src/images/go.svg"></button>
        </div>
        <div class="swiper-slide repair__container--slideBrand added-brand">
            <img class="logo-company" src="./src/images/haier.png">
            <button class="go-btn"><img src="./src/images/go.svg"></button>
        </div>
        <div class="swiper-slide repair__container--slideBrand added-brand">
            <img class="logo-company" src="./src/images/xerox.png">
            <button class="go-btn"><img src="./src/images/go.svg"></button>
        </div>
        <div class="swiper-slide repair__container--slideBrand added-brand">
            <img class="logo-company" src="./src/images/redmond.png">
            <button class="go-btn"><img src="./src/images/go.svg"></button>
        </div>`;
        brandArrow.style.transform = 'rotate(180deg)';
        brandText.textContent = 'Скрыть';
        isOpenBrand = true;
        brandCont.style.maxHeight = '500px';
    } else {
        brandCont.querySelectorAll('.added-brand').forEach(brand => {
            brand.remove();
        });
        brandArrow.style.transform = 'rotate(0deg)';
        brandText.textContent = 'Показать всё';
        isOpenBrand = false;
        brandCont.style.maxHeight = '150px';
    }
});

//где виды техники
const techCont = document.querySelector('.techCont');
const showMoreTech = document.getElementById('moreTech');
const techArrow = showMoreTech.querySelector('img');
const techText = showMoreTech.querySelector('p');

let isOpenTech = false;

showMoreTech.addEventListener('click', function () {
    if (!isOpenTech) {
        techCont.innerHTML += `
        <div class="swiper-slide repair__container--slideTech added-tech">
            <p class="rep_txt">Ремонт бытовой техники</p>
            <button class="go-btn"><img src="./src/images/go.svg"></button>
        </div>
        <div class="swiper-slide repair__container--slideTech added-tech">
            <p class="rep_txt">Ремонт телевизоров</p>
            <button class="go-btn"><img src="./src/images/go.svg"></button>
        </div>
        <div class="swiper-slide repair__container--slideTech added-tech">
            <p class="rep_txt">Ремонт смартфонов</p>
            <button class="go-btn"><img src="./src/images/go.svg"></button>
        </div>
        <div class="swiper-slide repair__container--slideTech added-tech">
            <p class="rep_txt">Ремонт принтеров</p>
            <button class="go-btn"><img src="./src/images/go.svg"></button>
        </div>`;
        techArrow.style.transform = 'rotate(180deg)';
        techText.textContent = 'Скрыть';
        isOpenTech = true;
        techCont.style.maxHeight = '500px';
    } else {
        techCont.querySelectorAll('.added-tech').forEach(tech => {
            tech.remove();
        });
        techArrow.style.transform = 'rotate(0deg)';
        techText.textContent = 'Показать всё';
        isOpenTech = false;
        techCont.style.maxHeight = '150px';
    }
});