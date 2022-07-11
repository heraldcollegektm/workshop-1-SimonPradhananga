
// here all the required value is selected from the html file 
let disp = document.querySelector("#display");
let one = document.querySelector("#button1");
let two = document.querySelector("#button2");
let three = document.querySelector("#button3");
let four = document.querySelector("#button4");
let five = document.querySelector("#button5");
let six = document.querySelector("#button6");
let seven = document.querySelector("#button7");
let eight = document.querySelector("#button8");
let nine = document.querySelector("#button9");
let zero = document.querySelector("#button0");

let add = document.querySelector("#addButton");
let sub = document.querySelector("#subtractButton");
let mul = document.querySelector("#multiplyButton");
let div = document.querySelector("#divideButton");
let cls = document.querySelector("#clearButton");
let calc = document.querySelector("#equalsButton");

// creates a event listner  
one.addEventListener('click', () => disp.value += 1);
two.addEventListener('click', () => disp.value += 2);
three.addEventListener('click', () => disp.value += 3);
four.addEventListener('click', () => disp.value += 4);
five.addEventListener('click', () => disp.value += 5);
six.addEventListener('click', () => disp.value += 6);
seven.addEventListener('click', () => disp.value += 7);
eight.addEventListener('click', () => disp.value += 8);
nine.addEventListener('click', () => disp.value += 9);
zero.addEventListener('click', () => disp.value += 0);

add.addEventListener('click', () => disp.value += '+');
sub.addEventListener('click', () => disp.value += '-');
mul.addEventListener('click', () => disp.value += '*');
div.addEventListener('click', () => disp.value += '/');



calc.addEventListener('click', function(){
  disp.value = eval(disp.value);
});

cls.addEventListener('click', () => disp.value = "");
