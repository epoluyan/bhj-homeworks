let adv = Array.from(document.querySelectorAll('.rotator__case'));

let rotator = () => {
    let index = adv.findIndex(element => element.classList.contains('rotator__case_active'));
    adv[index].classList.remove('rotator__case_active');
    if (index  === adv.length - 1) {
        adv[0].classList.add('rotator__case_active');
    }
    else {
        adv[index + 1].classList.add('rotator__case_active');
    }
}

setInterval(rotator, 1000);