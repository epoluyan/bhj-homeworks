let tabs = Array.from(document.querySelectorAll('.tab'));
let contents = Array.from(document.querySelectorAll('.tab__content'));
    for (let i = 0; i < tabs.length; i++) {
    tabs[i].onclick = function() {
        let index = tabs.findIndex(element => element.classList.contains('tab_active'));
        tabs[index].classList.remove('tab_active');
        contents[index].classList.remove('tab__content_active');
        tabs[i].classList.add('tab_active');
        contents[i].classList.add('tab__content_active');
    }
}