"use-strict";

const form = document.querySelector(".form");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("phone");
const inputPassword = document.getElementById("password");
const inputAge = document.getElementById("age");
const inputGender = document.getElementById("gender");
const inputDate = document.getElementById("date");
const inputColor = document.getElementById("color");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    inputName.value == "" ||
    inputEmail.value == "" ||
    inputPhone.value == "" ||
    inputPassword.value == "" ||
    inputAge.value == "" ||
    inputGender.value == "" ||
    inputDate.value == "" ||
    inputColor.value == ""
  ) {
    alert("Please complete all fileld");
  } else {
    alert("Form Submited Sucessfully");
    inputName.value =
      inputEmail.value =
      inputPhone.value =
      inputPassword.value =
      inputAge.value =
      inputGender.value =
      inputDate.value =
      inputColor.value =
        "";
  }
});
