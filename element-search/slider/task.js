let sliderItems = Array.from(document.querySelectorAll('.slider__item'));
let lastItem = sliderItems.length - 1;
const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');

let sliderClickLeft = () => {
    let index = sliderItems.findIndex(element => element.classList.contains('slider__item_active'));
    sliderItems[index].classList.remove('slider__item_active');
    sliderItems[index === 0 ? lastItem : [index - 1]].classList.add('slider__item_active');
}

let sliderClickRight = () => {
    let index = sliderItems.findIndex(element => element.classList.contains('slider__item_active'));
    sliderItems[index].classList.remove('slider__item_active');
    sliderItems[index === lastItem ? 0 : [index + 1]].classList.add('slider__item_active');
}

arrowPrev.onclick = sliderClickLeft;
arrowNext.onclick = sliderClickRight;