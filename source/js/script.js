const btn = document.querySelector('.header__toggle');
const nav = document.querySelector('.site-list');
nav.classList.remove('site-list--nojs');
btn.classList.remove('header__toggle--nojs');

btn.addEventListener('click', function() {
  this.classList.toggle('header__toggle--opened');
  nav.classList.toggle('site-list--opened');
});

var submitForm = document.querySelector('.form__program');
var nameError = document.querySelector('.name-error');
var weightError = document.querySelector('.weight-error');
var ageError = document.querySelector('.age-error');

var emailError = document.querySelector('.form__details-input--email');
var telError = document.querySelector('.form__details-input--tel');

submitForm.addEventListener('submit', function(evt){
  if(!nameError.value){
    evt.preventDefault();
    nameError.classList.add('general-input-error')
  }
  if(!weightError.value){
    evt.preventDefault();
    weightError.classList.add('general-input-error')
  }
  if(!ageError.value){
    evt.preventDefault();
    ageError.classList.add('general-input-error')
  }

  if(!emailError.value){
    evt.preventDefault();
    emailError.classList.add('general-input-error')
  }

  if(!telError.value){
    evt.preventDefault();
    telError.classList.add('general-input-error')
  }
});
