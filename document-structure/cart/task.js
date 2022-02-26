let products = Array.from(document.querySelectorAll('.product'));
let cart = document.querySelector('.cart__products');
let cartTitle = document.querySelector('.cart__title');
cartTitle.style.display = 'none';
for (let i = 0; i < products.length; i++) {
    products[i].quantity = Number(products[i].querySelector('.product__quantity-value').textContent);
    products[i].querySelector('.product__quantity-control_dec').onclick = () => {
        products[i].quantity -= 1;
        if (products[i].quantity === 0) {
            products[i].quantity = 1;
        }
        products[i].querySelector('.product__quantity-value').textContent = products[i].quantity;
    }
    products[i].querySelector('.product__quantity-control_inc').onclick = () => {
        products[i].quantity += 1;
        products[i].querySelector('.product__quantity-value').textContent = products[i].quantity;
    }
    products[i].querySelector('.product__add').onclick = function () {
        let id = products[i].getAttribute('data-id');
        let quantity = products[i].quantity;
        cartTitle.style.display = 'block';
        let itemInCart = document.createElement('div');
        itemInCart.classList.add('cart__product');
        itemInCart.setAttribute('data-id', id);
        itemInCart.innerHTML = '<img class=\"cart__product-image\"> <div class=\"cart__product-count\"> </div>';
        itemInCart.querySelector('.cart__product-image').setAttribute('src', products[i].querySelector('.product__image').getAttribute('src'));
        itemInCart.querySelector('.cart__product-count').innerText = quantity;
        let productsInCart = Array.from(document.querySelectorAll('.cart__product'));
        let checkProduct = productsInCart.find(element => element.getAttribute('data-id') === id);
        if (!checkProduct) {
            cart.appendChild(itemInCart);
        }
        else {
            checkProduct.querySelector('.cart__product-count').innerText = Number(checkProduct.querySelector('.cart__product-count').innerText) + quantity;
            quantity = 1;
        }
        products[i].querySelector('.product__quantity-value').textContent = 1;
        products[i].quantity = 1;
    }
}