//variables

let btn = document.getElementById("modal-button");
let closebtn = document.getElementById("close-btn");
let backdrop = document.querySelector('.backdrop');
//Event listenrers
btn.addEventListener("click", function () {
  backdrop.style.display = "block";
});

closebtn.addEventListener("click", function () {
  backdrop.style.display = "none";  
});

window.addEventListener("click", function (e) {
    console.log(e.target);
  if (e.target === backdrop){ 
  backdrop.style.display = "none";
  }
});
