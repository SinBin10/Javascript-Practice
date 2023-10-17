Here are the learnings from the projects I make

1) A div can also be centered by the following code :-
    width: 80%;
    margin: 1rem auto;
Here the left and right margin are automatically adjusted by the browser.

2) box-shadow: 0px 0px 10px;
here the first two properties represent x and y axis the third one represents blur effect and the 4th one represents color.

3) An array in js is represented by const arr = [{key: value,
                                                  key: value }];
You can change its value by
arr[index].key;

4) If you want to position a div with respect to a container(can be body) give the parent container position: relative; and give position: absolute; to the container being positioned.

after that you can position it by using left: 10%, right, etc.

5) If you want to apply transition to a div give it a transition of some seconds.

6) If you want to center a div you can also use
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
Instead of flexbox

7) ANIMATIONS:- If you want to animate a div give it a name and duration like the below example,

  animation-name: animatemodal;
  animation-duration: 0.4s;

After that use keyframes like the below example.

@keyframes animatemodal {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 50%;
    opacity: 1;
  }
}

8) IMPORTANT:-
Transition does not work with display:none; (unsure about this...)


