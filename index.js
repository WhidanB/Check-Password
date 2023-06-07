const password = document.getElementById("password");
const checkPassword = document.getElementById("check-password");
const alert = document.getElementById("alert");
const alert2 = document.getElementById("alert2");

let Check = function () {
  password.value != checkPassword.value
    ? (alert2.textContent = "Les mots de passe ne correspondent pas")
    : (alert2.textContent = "");
};

let lengthCheck = function () {
  password.value.length < 8
    ? (alert.textContent = "Le mot de passe est trop court")
    : (alert.textContent = "");
};

checkPassword.addEventListener("keyup", Check);

password.addEventListener("keyup", lengthCheck);
