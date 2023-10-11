// learning reveal and hide

const revealBtn = document.querySelector(".reveal");
const hiddenContent = document.querySelector(".hide");
function togg() {
  if (hiddenContent.classList.contains("reveal-btn"))
    hiddenContent.classList.remove("reveal-btn");
  else
  hiddenContent.classList.add("reveal-btn");
}

revealBtn.addEventListener("click", togg);
