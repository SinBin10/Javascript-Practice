//variables

let btn = document.getElementById("modal-button");
let modalContainer = document.getElementById("modal-container");
let closebtn = document.getElementById("close-btn");
let backdrop = document.querySelector('.backdrop');
//Event listenrers
btn.addEventListener("click", function (e) {
  modalContainer.style.display = "flex";
  backdrop.style.display = "block";
});

closebtn.addEventListener("click", function () {
  modalContainer.style.display = "none";
  backdrop.style.display = "none";
});

window.addEventListener("click", function (e) {
    console.log(e.target);
  if (e.target === backdrop){ 
  modalContainer.style.display = "none";
  backdrop.style.display = "none";
  }
});
