const qa = document.getElementsByClassName("qa");

for (let i = 0; i < qa.length; i++) {
    qa[i].addEventListener('click', function() {
        qa[i].classList.toggle('active');
    });
}
