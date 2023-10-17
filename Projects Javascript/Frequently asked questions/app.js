const question1 = document.querySelector('.questions-1');
const question2 = document.querySelector('.questions-2');
const question3 = document.querySelector('.questions-3');
const answer1 = document.querySelector('.answers-1');
const answer2 = document.querySelector('.answers-2');
const answer3 = document.querySelector('.answers-3');
const toggle1 = document.querySelector('.toggle-1');
const toggle2 = document.querySelector('.toggle-2');
const toggle3 = document.querySelector('.toggle-3');

question1.addEventListener('click', function(){
    if(toggle1.innerText === '+')
    {
        toggle1.innerText = "-";
        answer1.style.display = "block";
    }
    else
    {
        toggle1.innerText = "+";
        answer1.style.display = "none";
    }
});
question2.addEventListener('click', function(){
    if(toggle2.innerText === '+')
    {
        toggle2.innerText = "-";
        answer2.style.display = "block";
    }
    else
    {
        toggle2.innerText = "+";
        answer2.style.display = "none";
    }
});
question3.addEventListener('click', function(){
    if(toggle3.innerText === '+')
    {
        toggle3.innerText = "-";
        answer3.style.display = "block";
    }
    else
    {
        toggle3.innerText = "+";
        answer3.style.display = "none";
    }
});

