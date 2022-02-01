const clickСounter = document.getElementById('clicker__counter');
console.log('clickСounter', clickСounter)
const cookie = document.getElementById('cookie');
cookie.onclick = function () {
    clickСounter.textContent = Number(clickСounter.textContent) + 1;
    if (cookie.width > 200) {
    cookie.width = 200;
    }
    else {
        cookie.width = 300;
    }
}