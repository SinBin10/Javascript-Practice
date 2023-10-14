document.querySelector('#game').addEventListener('click', function(e){
    const color = e.target;
    e.target.style.backgroundColor = 'lightgrey';
    console.log(e.target.getAttribute('Id') + ' is clicked');
});