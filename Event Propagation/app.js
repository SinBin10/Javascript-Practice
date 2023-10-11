window.addEventListener('click', function() {
    console.log("Window");
},false);
document.addEventListener('click', function() {
    console.log("Document");
}, false);
document.querySelector('.box-2').addEventListener('click', function(e) {
    //e.stopPropagation();
    console.log("Box-2");
}, false);
document.querySelector('.box-1').addEventListener('click', function() {
    console.log("Box-1");
}, false);
document.querySelector('.btn').addEventListener('click', function(e) {
    console.log(e.target.innerText = "Clicked");
}, false);