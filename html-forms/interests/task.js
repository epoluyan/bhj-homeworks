const interests = document.querySelector('ul');
const checkboxes = Array.from(document.querySelectorAll('.interest__check'));
interests.onclick = () => {
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].onchange = () => {
            if (checkboxes[i].checked == true) {
                Array.from(checkboxes[i].closest('.interest').querySelectorAll('.interest__check')).forEach(element => element.checked = true);
            }
            if (checkboxes[i].checked == false) {
                Array.from(checkboxes[i].closest('.interest').querySelectorAll('.interest__check')).forEach(element => element.checked = false);
            }
        }
    }
}