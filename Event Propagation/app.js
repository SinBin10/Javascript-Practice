window.addEventListener('click', function() {
    console.log("Window");
},true);
document.addEventListener('click', function() {
    console.log("Document");
}, true);
document.querySelector('.box-2').addEventListener('click', function(e) {
    //e.stopPropagation();
    console.log("Box-2");
}, true);
document.querySelector('.box-1').addEventListener('click', function() {
    console.log("Box-1");
}, true);
document.querySelector('.btn').addEventListener('click', function(e) {
    console.log(e.target.innerText = "Clicked");
}, true);