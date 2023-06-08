const password = document.getElementById("password");
const checkPassword = document.getElementById("check-password");
const alert = document.getElementById("alert");
const alert2 = document.getElementById("alert2");
const alert3 = document.getElementById("alert3");
const alert4 = document.getElementById("alert4");
const alert5 = document.getElementById("alert5");
const alert6 = document.getElementById("alert6");
const alert7 = document.getElementById("alert7");
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

// this function compares both password inputs
const Check = function () {
  password.value != checkPassword.value
    ? (alert.textContent = "Les mots de passe ne correspondent pas")
    : (alert.textContent = "");
};
// password has to be at least 8 characters long, must contain at least 1 lowercase, 1 uppercase, 1 number and 1 special character. This function will help checking that all criteria are met.
const BonusCheck = function () {
  //
  password.value.length < 8
    ? (alert2.textContent = "Le mot de passe est trop court")
    : (alert2.textContent = "");
  password.value.search(/[a-z]/) < 0
    ? (alert3.textContent =
        "Votre mot de passe doit contenir au moins une lettre minuscule")
    : (alert3.textContent = "");
  password.value.search(/[A-Z]/) < 0
    ? (alert4.textContent =
        "Votre mot de passe doit contenir au moins une lettre majuscule")
    : (alert4.textContent = "");
  password.value.search(/[0-9]/) < 0
    ? (alert5.textContent =
        "Votre mot de passe doit contenir au moins un chiffre")
    : (alert5.textContent = "");
  password.value.search(specialChars) < 0
    ? (alert6.textContent =
        "Votre mot de passe doit contenir au moins un caractère spécial")
    : (alert6.textContent = "");
  if (
    password.value.length >= 8 &&
    password.value.search(/[a-z]/) >= 0 &&
    password.value.search(/[A-Z]/) >= 0 &&
    password.value.search(/[0-9]/) >= 0 &&
    password.value.search(specialChars) >= 0
  ) {
    alert7.textContent = "VOUS AVEZ UN SACRÉ PASSWORD";
    alert7.style.color = "Green";
  } else {
    alert7.textContent = "";
  }
};

checkPassword.addEventListener("keyup", Check);
password.addEventListener("keyup", Check);
password.addEventListener("keyup", BonusCheck);
