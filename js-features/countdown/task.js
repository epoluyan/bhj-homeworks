const timer = document.getElementById('timer');
const countDown = function () {
    if (Number(timer.textContent) == 0) {
        window.alert('Вы победили в конкурсе!');
    }
    if (Number(timer.textContent) > -1) {
        timer.textContent = Number(timer.textContent) - 1;
    }
}

let countDownId = setInterval(countDown, 1000);