let menuButton = document.querySelector('.dropdown__value');
let dropDownMenu = document.querySelector('.dropdown__list');
let dropDownList = Array.from(document.querySelectorAll('.dropdown__item'));
let dropDownValue = document.querySelector('.dropdown__value')
let openMenu = () => dropDownMenu.classList.add('dropdown__list_active');


menuButton.addEventListener('click', openMenu);

for (let i = 0; i < dropDownList.length; i++) {
    let clickOnValue = () => {
        dropDownValue.textContent = dropDownList[i].querySelector('a').textContent;
        event.preventDefault();
        dropDownMenu.classList.remove('dropdown__list_active');
    }
    dropDownList[i].querySelector('a').addEventListener('click', clickOnValue);
}