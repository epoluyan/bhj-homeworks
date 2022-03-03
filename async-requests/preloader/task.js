let loader = document.querySelector('.loader');
let items = document.querySelector('#items');
function createItem(charcode, value) {
    let newItem = document.createElement('div');
    newItem.classList.add('item');
    let itemCode = document.createElement('div');
    itemCode.classList.add('item__code');
    itemCode.textContent = charcode;
    let itemValue = document.createElement('div');
    itemValue.classList.add('item__value');
    itemValue.textContent = value;
    items.appendChild(newItem);
    newItem.appendChild(itemCode);
    newItem.appendChild(itemValue);
    let itemCurrency = document.createElement('div');
    itemCurrency.classList.add('item__currency');
    itemCurrency.textContent = 'руб.';
    newItem.appendChild(itemCurrency);
}
let request = new XMLHttpRequest();
request.responseType = "";
request.open('GET', 'https://netology-slow-rest.herokuapp.com');
request.send();
request.onreadystatechange = function () {
    if (request.readyState === 4) {
        loader.classList.remove('loader_active');
        let currencies = JSON.parse(request.responseText).response.Valute;
        console.log(currencies);
        for (let prop in currencies) {
            console.log(prop);
            let charcode = prop;
            let value = currencies[charcode]['Value'];
            createItem(charcode, value);
        }
    }
}