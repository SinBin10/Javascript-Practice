const example3 = document.querySelector(".enter-3");
function blue() {
  example3.style.backgroundColor = "blue";
}
function alertBtn() {
    alert("learning js");
}
example3.addEventListener("mouseover", blue);
example3.addEventListener("mouseover", alertBtn);
