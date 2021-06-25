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
const closeModalBtn = document.querySelector(".close");

// Usefull variables

let myRegex = /^[a-zA-Z-\s]+$/;

// Error Messages

const errorFirst = document.getElementById("error_first");
const errorLast = document.getElementById("error_last");

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
});
