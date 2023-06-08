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
    ? (alert.style.display = "block")
    : (alert.style.display = "none");
};
// password has to be at least 8 characters long, must contain at least 1 lowercase, 1 uppercase, 1 number and 1 special character. This function will help checking that all criteria are met and give a confirmation through h3.
const BonusCheck = function () {
  //
  password.value.length < 8
    ? (alert2.style.display = "block")
    : (alert2.style.display = "none");
  password.value.search(/[a-z]/) < 0
    ? (alert3.style.display = "block")
    : (alert3.style.display = "none");
  password.value.search(/[A-Z]/) < 0
    ? (alert4.style.display = "block")
    : (alert4.style.display = "none");
  password.value.search(/[0-9]/) < 0
    ? (alert5.style.display = "block")
    : (alert5.style.display = "none");
  password.value.search(specialChars) < 0
    ? (alert6.style.display = "block")
    : (alert6.style.display = "none");
  if (
    password.value.length >= 8 &&
    password.value.search(/[a-z]/) >= 0 &&
    password.value.search(/[A-Z]/) >= 0 &&
    password.value.search(/[0-9]/) >= 0 &&
    password.value.search(specialChars) >= 0
  ) {
    alert7.textContent = "Vous avez un sacré password";
    alert7.style.display = "block";
    alert7.style.color = "Green";
  } else {
    alert7.style.display = "none";
  }
};

checkPassword.addEventListener("keyup", Check);
password.addEventListener("keyup", Check);
password.addEventListener("keyup", BonusCheck);
