const elementFormButton = document.querySelector('.information_authorization_form_btn');
const elementFormPassword1 = document.getElementById("password1");
const elementFormPassword2 = document.getElementById("password2");

elementFormButton.onclick = (e) => {
    if (elementFormPassword1.value == "" && elementFormPassword2.value == "") {
        elementFormPassword1.classList.add('error');
        elementFormPassword2.classList.add('error');
        e.preventDefault();
    }
    else if (elementFormPassword1.value != elementFormPassword2.value) {
        elementFormPassword1.classList.add('error');
        elementFormPassword2.classList.add('error');
        e.preventDefault();
    }
    else if (elementFormPassword1.value == elementFormPassword2.value) {
        elementFormPassword1.classList.remove('error');
        elementFormPassword2.classList.remove('error');
        elementFormPassword1.classList.add('correct');
        elementFormPassword2.classList.add('correct');
        e.preventDefault();
    }
}