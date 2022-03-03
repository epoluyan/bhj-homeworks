let progressBar = document.querySelector('#progress');
let form = document.forms.form;
let fileInput = document.querySelector('input');
form.onsubmit = function () {
    event.preventDefault();
    if (fileInput.value) {
        let formData = new FormData(document.forms.form);
        let request = new XMLHttpRequest();
        request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
        request.upload.addEventListener('progress', function (element) {
            progressBar.value = (element.loaded / element.total);
            console.log(element.loaded);
        });
        request.send(formData);
    };
};