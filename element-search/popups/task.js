let modalWinodwDanger = document.getElementById('modal_main');
modalWinodwDanger.classList.add('modal_active')

const closeButton = Array.from(document.querySelectorAll('.modal__close'));
closeButton.forEach((e) => {
    e.onclick = () => {
        e.closest('.modal').classList = 'modal';
    }
});

const successButton = document.querySelector('.btn_danger');
const successPopup = document.getElementById('modal_success');
successButton.onclick = () => {
    successButton.closest('.modal').classList = 'modal';
    successPopup.classList.add('modal_active');
}