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


