let menuLinks =  Array.from(document.querySelectorAll('.menu__link'));

menuLinks.forEach((e) => {
    e.onclick = () => {
        if (e.closest('.menu__item').querySelector('.menu_sub') != null) {
            e.closest('.menu__item').querySelector('.menu_sub').classList.toggle('menu_active')
            return false;
        }        
    }
});