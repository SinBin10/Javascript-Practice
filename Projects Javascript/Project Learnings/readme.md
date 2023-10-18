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
Absolute positioning takes place with respect to the parent container
Fixed positioning takes place with respect to the viewport.

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
Transition does not work with display:none; (100%  sure about this)

9) if you want to apply display: none; to a div remember you can also add display none to its parent container.

10) Remember a small content like '+' toggle button does not need to inserted in the html it can be inserted by ::after pseudo selector.

11) When giving spaces and padding make sure to give element their spaces by selecting them in the styles file. Don't use other elements to give them spacing.

12) If you want to apply a expanding transition to div DONT USE DISPLAY NONE AND AND THEN BLOCK TRANSITION DOES NOT WORK ON DISPLAY PROPERTIES. Instead give the div a height of 0 and hide the overflow and then use the toggle function in javascript which will toggle a class with height 150px(for example) and height 0 , overflow hidden.
NOTE:- REMEMBER TO ALSO SPECIFY THE CLASS WITH HEIGHT 0 WITH THE ACTIVE CLASS FOR THE TRANSITION TO WORK AND THE TEXT TO BE DISPLAYED.