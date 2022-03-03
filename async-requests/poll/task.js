let request = new XMLHttpRequest();
let pollTitle = document.querySelector('.poll__title');
let pollAnswers = document.querySelector('.poll__answers');
function addAnswer(answer) {
    let newAnswer = document.createElement('button');
    newAnswer.classList.add('poll__answer');
    newAnswer.textContent = answer;
    newAnswer.onclick = () => {
        alert('Спасибо, ваш голос засчитан!');
    }
    pollAnswers.appendChild(newAnswer);
}
request.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
request.send();
request.onreadystatechange = function () {
    if (request.readyState == 4) {
        let poll = JSON.parse(request.responseText);
        pollTitle.textContent = poll['data']['title'];
        for (i = 0; i < poll['data']['answers'].length; i++) {
            addAnswer(poll['data']['answers'][i]);
        }
    }
}