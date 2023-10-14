document.querySelector('#game').addEventListener('click', function(e){
    const color = e.target;
    e.target.style.backgroundColor = 'lightgrey';
    console.log(e.target.getAttribute('id') + ' is clicked');
});

const div = document.createElement('div');
const sport = document.querySelector('#game');
div.innerText = 'Cricket';
div.setAttribute('id', 'cricket');
sport.appendChild(div);