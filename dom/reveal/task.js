let revealElements = Array.from(document.querySelectorAll('.reveal'));

onscroll = () => {
    for (let i = 0; i < revealElements.length; i++) {
        if (
            revealElements[i].getBoundingClientRect().top < window.innerHeight
                && (revealElements[i].getBoundingClientRect().top + revealElements[i].getBoundingClientRect().height) > 0
            ) {
                revealElements[i].classList.add('reveal_active');
            }
        else {
            revealElements[i].classList.remove('reveal_active');
        }
    }
}