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
const form = document.querySelector("form[name='reserve']");
const birthdate = document.getElementById("birthdate");
const newYork = document.getElementById("location1");
const sanFrancisco = document.getElementById("location2");
const seattle = document.getElementById("location3");
const chicago = document.getElementById("location4");
const boston = document.getElementById("location5");
const portland = document.getElementById("location6");
const cities = [newYork, sanFrancisco, seattle, chicago, boston, portland];
const condition = document.getElementById("checkbox1");
const closeModalBtn = document.querySelector(".close");
const validationModalBtn = document.querySelector('.btn-submit[type="submit"]');

// Usefull variables

let myRegex = /^[a-zA-Z-\s]+$/;
let myRegexEmail = /^[a-zA-Z-0-9]+@[a-zA-Z-]+\.[a-zA-Z]{2,6}$/;
let myRegexTournament = /[0-9]/;

// Error Messages

const errorFirst = document.getElementById("error_first");
const errorLast = document.getElementById("error_last");
const errorEmail = document.getElementById("error_email");
const errorBirthdate = document.getElementById("error_birthdate");
const errorTournament = document.getElementById("error_tournament");
const errorCities = document.getElementById("error_cities");
const errorCondition = document.getElementById("error_condition");

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

// Validation modal

function validationModal(e) {
   var valueValidate = validate();
   e.preventDefault();
   if (valueValidate) {
      confirmationMessage();
   }
   closeModalBtn.addEventListener("click", closeModal);
}

// Validation form : Fonction qui exécute toutes les fonctions de validation de champs, retourne false en cas d'erreur et true si tout est OK

function validate() {
   var current = { isFocused: false };
   var valueFirstname = validateFirstname(current);
   var valueLastname = validateLastname(current);
   var valueEmail = validateEmail(current);
   var valueBirthdate = validateBirthdate(current);
   var valueTournament = validateTournament(current);
   var valueCities = validateCities();
   var valueCondition = validateCondition();
   if (valueFirstname == false || valueLastname == false || valueEmail == false || valueBirthdate == false || valueTournament == false || valueCities == false || valueCondition == false) {
      return false;
   } else {
      return true;
   }
}

// Show error messages and focus : Fonction qui permet de focus chaque champ et qui injecte un message d'erreur en cas de champ invalide

function showError(current, error, obj, message) {
   if (current.isFocused == false) {
      current.isFocused = true;
      obj.focus();
   }
   message.innerHTML = error;
   message.style.color = "red";
   message.style.fontSize = "10px";
   return false;
}

// Validation firstname : Fonction qui vérifie si le champ prénom est valide

function validateFirstname(current) {
   var firstname = document.forms["reserve"]["first"];
   let error = false;

   if (firstname.value == "" || firstname.value.length < 2) {
      error = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
   } else if (myRegex.test(firstname.value) == false) {
      error = "Le champ n'est pas valide";
   }
   if (error) {
      return showError(current, error, firstname, errorFirst);
   }
   errorFirst.innerHTML = "";
   return true;
}

// Validation lastname : Fonction qui vérifie si le champ nom est valide

function validateLastname(current) {
   var lastname = document.forms["reserve"]["last"];
   let error = false;

   if (lastname.value == "" || lastname.value.length < 2) {
      error = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
   } else if (myRegex.test(lastname.value) == false) {
      error = "Le champ n'est pas valide";
   }
   if (error) {
      return showError(current, error, lastname, errorLast);
   }
   errorLast.innerHTML = "";
   console.log("vl_true");
   return true;
}

// Validation email : Fonction qui vérifie si le champ email est valide

function validateEmail(current) {
   var email = document.forms["reserve"]["email"];
   let error = false;

   if (email.value == "" || email.value.length < 2) {
      error = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
   } else if (myRegexEmail.test(email.value) == false) {
      error = "Le champ n'est pas valide";
   }
   if (error) {
      return showError(current, error, email, errorEmail);
   }
   errorEmail.innerHTML = "";
   return true;
}

// Validation and check birthdate : Fonction qui vérifie si la date entrée par l'utilisateur est valide

function checkDate() {
   var dateOfToday = new Date();
   var dateBirthday = new Date(birthdate.value);
   var dateOfMajority = new Date(1988, 1, 1);
   var dateLimit = new Date(1921, 1, 1);
   var valueDateOfToday = parseInt(dateOfToday.valueOf(), 10);
   var valueDateLimit = parseInt(dateLimit.valueOf(), 10);
   var valueDateOfMajority = parseInt(dateOfMajority.valueOf(), 10);
   var valueLimitOfMajority = valueDateOfToday - valueDateOfMajority;
   var valueDateBirthday = parseInt(dateBirthday.valueOf(), 10);

   if (valueDateBirthday > valueLimitOfMajority || valueDateBirthday < valueDateLimit) {
      return false;
   }
   return true;
}

function validateBirthdate(current) {
   var birthdate = document.forms["reserve"]["birthdate"];
   let error = false;

   if (birthdate.value == "") {
      error = "Veuillez entrer votre date de naissance";
   }
   if (!checkDate()) {
      error = "Veuillez entrer une date valide";
   }
   if (error) {
      return showError(current, error, birthdate, errorBirthdate);
   }
   errorBirthdate.innerHTML = "";
   return true;
}

// Validation number of tournament : Fonction qui vérifie que le nombre de tournois est bien valide

function validateTournament(current) {
   var tournament = document.forms["reserve"]["quantity"];
   let error = false;
   console.log(tournament.value);
   if (myRegexTournament.test(tournament.value) && tournament.value >= 0 && tournament.value < 100) {
      errorTournament.innerHTML = "";
      return true;
   }
   error = "Veuillez indiquer un nombre de tournois compris entre 0 et 99";
   if (error) {
      return showError(current, error, tournament, errorTournament);
   }
}

// Validation Cities : Fonction qui vérifie sir une ville a bien été choisie

function validateCities() {
   for (let i = 0; i < cities.length; i++) {
      console.log(cities.length);
      if (cities[i].checked) {
         console.log(i);
         errorCities.innerHTML = "";
         return true;
      }
   }
   errorCities.innerHTML = "Veuillez choisir une ville";
   errorCities.style.color = "red";
   errorCities.style.fontSize = "10px";
   return false;
}

// Validation conditions of use : Fonction qui vérifie si la case conditions d'utilisation a bien été cochée

function validateCondition() {
   if (condition.checked) {
      errorCondition.innerHTML = "";
      return true;
   }
   errorCondition.innerHTML = "Veuillez accepter les conditions d'utilisation";
   errorCondition.style.color = "red";
   errorCondition.style.fontSize = "10px";
   return false;
}

// Reset form : Fonction qui réinitialise le formulaire une fois celui ci validé

function resetForm() {
   formData.forEach((items) => {
      items.style["visibility"] = "visible";
   });
   document.querySelectorAll(".confirmation").forEach((element) => element.remove());
   form.reset();
}

// Close confirmation message : Fonction qui permet de fermer le modal

function closeModal() {
   document.querySelector(".close-button").remove();
   validationModalBtn.style["visibility"] = "visible";
   modalbg.style.display = "none";
   resetForm();
}

// Confirmation message : Fonction qui injecte un message de confirmation une fois le formulaire validé

function confirmationMessage() {
   formData.forEach((items) => {
      items.style["visibility"] = "hidden";
   });
   validationModalBtn.style["visibility"] = "hidden";
   let messsageConfirmation = document.createElement("p");
   messsageConfirmation.className = "confirmation";
   messsageConfirmation.innerText = "Merci, votre réservation a bien été reçue !";
   form.appendChild(messsageConfirmation);
   let closeBtn = document.createElement("div");
   closeBtn.className = "close-button";
   closeBtn.innerText = "Fermer";
   form.appendChild(closeBtn);
   document.querySelector(".close-button").addEventListener("click", closeModal);
}

validationModalBtn.addEventListener("click", validationModal);
