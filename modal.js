function editNav() {
   var x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
      x.className += " responsive";
   } else {
      x.className = "topnav";
   }
}

// DOM Elements

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("form");
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");
const birthdate = document.getElementById("birthdate");
const tournament = document.getElementById("quantity");
const closeModalBtn = document.querySelector(".close");

// Usefull variables

let myRegex = /^[a-zA-Z-\s]+$/;
let myRegexEmail = /^[a-zA-Z-]+@[a-zA-Z-]+\.[a-zA-Z]{2,6}$/;
let myRegexTournament = /[0-9]/;

// Error Messages

const errorFirst = document.getElementById("error_first");
const errorLast = document.getElementById("error_last");
const errorEmail = document.getElementById("error_email");
const errorBirthdate = document.getElementById("error_birthdate");
const errorTournament = document.getElementById("error_tournament");

// launch modal event

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form

function launchModal() {
   modalbg.style.display = "block";
}

// Close Modal

closeModalBtn.addEventListener("click", function () {
   modalbg.style.display = "none";
});

/*
// Validation first name

form.addEventListener("submit", function (e) {
   if (firstname.value.trim() == "" || firstname.value.length < 2) {
      errorFirst.innerHTML = "Veuillez entrer 2 caractères ou plus";
      errorFirst.style.color = "red";
      errorFirst.style.fontSize = "15px";
      e.preventDefault();
   } else if (myRegex.test(firstname.value) == false) {
      errorFirst.innerHTML = "Le champ n'est pas valide";
      errorFirst.style.color = "red";
      errorFirst.style.fontSize = "15px";
      e.preventDefault();
   }
});

// Validation last name

form.addEventListener("submit", function (e) {
   if (lastname.value.trim() == "" || lastname.value.length < 2) {
      errorLast.innerHTML = "Veuillez entrer 2 caractères ou plus";
      errorLast.style.color = "red";
      errorLast.style.fontSize = "15px";
      e.preventDefault();
   } else if (myRegex.test(lastname.value) == false) {
      errorLast.innerHTML = "Le champ n'est pas valide";
      errorLast.style.color = "red";
      errorLast.style.fontSize = "15px";
      e.preventDefault();
   }
});*/

// Validation formulaire

// var number = document.forms["quantity"];
// var city = document.forms["location"];

function validate() {
   var valF = validateFirstname();
   var valL = validateLastname();
   var valE = validateEmail();
   var valB = validateBirthdate();
   var valT = validateTournament();

   if (valF == false || valL == false || valE == false || valB == false || valT == false) {
      console.log("non");
      return false;
   } else {
      console.log("oui");
      return true;
   }
}

// Validation firstname

function validateFirstname() {
   var firstname = document.forms["reserve"]["first"];

   if (firstname.value == "" || firstname.value.length < 2) {
      errorFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
      errorFirst.style.color = "red";
      errorFirst.style.fontSize = "10px";
      //firstname.focus();
      console.log("pas de prénom");
      return false;
   } else {
      errorFirst.innerHTML = "";
   }
   if (myRegex.test(firstname.value) == false) {
      errorFirst.innerHTML = "Le champ n'est pas valide";
      errorFirst.style.color = "red";
      errorFirst.style.fontSize = "10px";
      //firstname.focus();
      console.log("le prénom n'est pas valide");
      return false;
   } else {
      errorFirst.innerHTML = "";
   }
}

// Validation lastname

function validateLastname() {
   var lastname = document.forms["reserve"]["last"];

   if (lastname.value == "" || lastname.value.length < 2) {
      errorLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
      errorLast.style.color = "red";
      errorLast.style.fontSize = "10px";
      //lastname.focus();
      console.log("le nom n'est pas valide");
      return false;
   } else {
      errorLast.innerHTML = "";
   }
   if (myRegex.test(lastname.value) == false) {
      errorLast.innerHTML = "Le champ n'est pas valide";
      errorLast.style.color = "red";
      errorLast.style.fontSize = "10px";
      //lastname.focus();
      return false;
   } else {
      errorLast.innerHTML = "";
   }
}

// Validation email

function validateEmail() {
   var email = document.forms["reserve"]["email"];

   if (email.value == "" || email.value.length < 2) {
      errorEmail.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ de l'email";
      errorEmail.style.color = "red";
      errorEmail.style.fontSize = "10px";
      console.log("le mail n'est pas valide");
      return false;
   } else {
      errorEmail.innerHTML = "";
   }
   if (myRegexEmail.test(email.value) == false) {
      errorEmail.innerHTML = "Le champ n'est pas valide";
      errorEmail.style.color = "red";
      errorEmail.style.fontSize = "10px";
      return false;
   } else {
      errorEmail.innerHTML = "";
   }
}

// Validation birthdate

function validateBirthdate() {
   var birthdate = document.forms["reserve"]["birthdate"];

   if (birthdate.value == "") {
      errorBirthdate.innerHTML = "Veuillez entrer votre date de naissance";
      errorBirthdate.style.color = "red";
      errorBirthdate.style.fontSize = "10px";
   } else {
      errorBirthdate.innerHTML = "";
   }
}

// Validation number of tournament

function validateTournament() {
   if (!myRegexTournament.test(tournament.value) && !tournament.value >= 0 && !tournament.value < 100) {
      errorTournament.innerHTML = "Veuillez indiquer un nombre de tournois compris entre 0 et 99";
      errorTournament.style.color = "red";
      errorTournament.style.fontSize = "10px";
      console.log("mauvais nombre de tournois");
      return false;
   } else {
      errorTournament.innerHTML = "";
   }
}
