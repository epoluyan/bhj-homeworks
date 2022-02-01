let deadCounter = document.getElementById('dead');
let missesCounter = document.getElementById('lost');
let field = document.getElementsByClassName('hole-game');
getHole = index => document.getElementById(`hole${index}`);
field.item(0).onclick = function () {
    for (i = 1; i < 10; i++) {
        let hole = getHole(i);
        getHole(i).onclick = () => {
            if (hole.className.includes('hole_has-mole')) {
                deadCounter.textContent = Number(deadCounter.textContent) + 1;
            }
            else {
                missesCounter.textContent = Number(missesCounter.textContent) + 1;
            }
        }
    }
    if (Number(missesCounter.textContent) === 5) {
        alert('Вы проиграли :(')
        missesCounter.textContent = 0;
        deadCounter.textContent = 0;
    }
    
    if (Number(deadCounter.textContent) === 10) {
        alert('Ура, победа!');
        missesCounter.textContent = 0;
        deadCounter.textContent = 0;
    }
}
