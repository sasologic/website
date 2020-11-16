//Code for Modal
const modal = document.querySelector("#modal");
console.log(modal);
const modalButton = document.querySelector("#modal-button");

setTimeout( () => {
  modal.classList.remove("hide-modal");
  modal.classList.add("modal");
},3000);

modalButton.addEventListener('click', () => {
  modal.classList.add("hide-modal");
});

//Code for Toggling mobile views
const menu = document.getElementById("mobile-icon");
const nav = document.getElementById("nav");
const exit = document.getElementById("exit");

menu.addEventListener('click', function(e) {
  nav.classList.toggle('hide-mobile');
  e.preventDefault();
});

exit.addEventListener('click', function(e) {
  nav.classList.add('hide-mobile');
  e.preventDefault();
});

