let menuLinks =  Array.from(document.querySelectorAll('.menu__link'));

menuLinks.forEach((e) => {
    e.onclick = () => {
        console.log('1', e.closest('.menu__item').querySelector('.menu_sub') != null);
        if (e.closest('.menu__item').querySelector('.menu_sub') != null) {
            e.closest('.menu__item').querySelector('.menu_sub').classList.add('menu_active')
            return false;
        }

        else if ( e.closest('.menu__item').querySelector('.menu_sub').classList.contains('menu_active')) {
            e.closest('.menu__item').querySelector('.menu_sub').classList.remove('menu_active')
            if (e.closest('.menu__item').querySelector('.menu_sub') != null) {
                return false;
            }
        }
        
    }
});