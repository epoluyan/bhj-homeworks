const links = Array.from(document.querySelectorAll('.has-tooltip'));
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
        if (links[i].querySelector('.tooltip')) {
            links[i].querySelector('.tooltip').remove();
        }
        else {
            if (document.querySelector('.tooltip')) {
                document.querySelector('.tooltip').remove();
            }
            let tooltip = document.createElement('div');
            tooltip.innerText = links[i].title;
            tooltip.classList.add('tooltip', 'tooltip_active');
            let top = Math.floor(links[i].getBoundingClientRect().top + 20).toString() + 'px';
            let left = Math.floor(links[i].getBoundingClientRect().left).toString() + 'px';
            tooltip.style.left = left;
            tooltip.style.top = top;
            links[i].insertAdjacentElement('beforeend', tooltip);
        }
        event.preventDefault()
    });
}

document.onscroll = function () {
    let tooltip = document.querySelector('.tooltip');
    let parent = tooltip.parentElement;
    let top = Math.floor(parent.getBoundingClientRect().top + 20).toString() + 'px';
    tooltip.style.top = top;
}