const chatButton = document.querySelector('.chat-widget__side');
const chatWidget = document.querySelector('.chat-widget');
const messageInput = document.querySelector('.chat-widget__input');
chatButton.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
    messages.innerHTML += `
    <div class="message">
    <div class="message__time"> ${new Date().getHours()} ${new Date().getMinutes()} </div>
    <div class="message__text">
     Здравствуйте!
    </div>
</div>
    `
})

const botMessages = [
    'Не пиши сюда больше',
    'Зачем ты здесь',
    'Звоните в спортлото',
    'Я тебя не понимаю',
    'У меня переучет',
    'Я занят, перезвоните позже!',
    'Этого бота загрызли дикие звери',
    'Ничего не знаю, я не видела звезд',
    'Что ты мне сделаешь, я в другом городе',
    'Ыыыыыыыыыы',
]
let clientMessage = '';
const messages = document.querySelector('.chat-widget__messages');
messageInput.oninput = () => {
    clientMessage = messageInput.value;
}

document.addEventListener('keydown', function (event) {
    if (event.code == 'Enter' && clientMessage != '') {
        messages.innerHTML += `
        <div class="message message_client">
        <div class="message__time"> ${new Date().getHours()} ${new Date().getMinutes()} </div>
        <div class="message__text">${clientMessage}</div>
    </div>
    `
        messageInput.value = '';
        clientMessage = '';

        messages.innerHTML += `
        <div class="message">
        <div class="message__time"> ${new Date().getHours()} ${new Date().getMinutes()} </div>
        <div class="message__text">
         ${botMessages[Math.floor(Math.random() * 10)]}
        </div>
    </div>
        `
        if (messages.getBoundingClientRect().bottom - messages.getBoundingClientRect().top > 248) {
            messages.scrollIntoView(false);
        }
    }
})