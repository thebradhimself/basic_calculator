var button1 = document.getElementById('number1');
var button2 = document.getElementById('number2');
var button3 = document.getElementById('number3');
var button4 = document.getElementById('number4');
var button5 = document.getElementById('number5');
var button6 = document.getElementById('number6');
var button7 = document.getElementById('number7');
var button8 = document.getElementById('number8');
var button9 = document.getElementById('number9');
var button0 = document.getElementById('number0');
var buttoncls = document.getElementById('clsbutton');

var buttonPlus = document.getElementById('symbolPlus');
var buttonMinus = document.getElementById('symbolMinus');
var buttonTimes = document.getElementById('symbolTimes');
var buttonDivide = document.getElementById('symbolDivide');
var buttonEquals = document.getElementById('symbolEquals');
var buttonSqrt = document.getElementById('symbolSqrt');
var buttonPower = document.getElementById('symbolPower');
var buttonDot = document.getElementById('symbolPeriod');


var firstNumber = '';
var secondNumber = '';
var symbol = '';

function whatPushed(num){
  if(isNaN(num) && num != "."){
    symbol = num;
    document.getElementById("inputfield").innerHTML = firstNumber + symbol;
  }
  else if(symbol == ''){
    firstNumber += num;
    document.getElementById("inputfield").innerHTML = firstNumber;
  }
  else {
    secondNumber += num;
    document.getElementById("inputfield").innerHTML = firstNumber + symbol + secondNumber;
  }
}

button1.addEventListener('click',function(){
  whatPushed("1");
});

button2.addEventListener('click',function(){
  whatPushed("2");
});

button3.addEventListener('click',function(){
  whatPushed("3");
});

button4.addEventListener('click',function(){
  whatPushed("4");
});

button5.addEventListener('click',function(){
  whatPushed("5");
});

button6.addEventListener('click',function(){
  whatPushed("6");
});

button7.addEventListener('click',function(){
  whatPushed("7");
});

button8.addEventListener('click',function(){
  whatPushed("8");
});

button9.addEventListener('click',function(){
  whatPushed("9");
});

button0.addEventListener('click',function(){
  whatPushed("0");
});

buttonPlus.addEventListener('click',function(){
  whatPushed("+");
});

buttonMinus.addEventListener('click',function(){
  whatPushed("-");
});

buttonTimes.addEventListener('click',function(){
  whatPushed("*");
});

buttonDivide.addEventListener('click',function(){
  whatPushed("/");
});

buttonSqrt.addEventListener('click',function(){
  whatPushed("√");
});

buttonPower.addEventListener('click',function(){
  whatPushed("^");
});

buttoncls.addEventListener('click',function(){
  symbol = '';
  firstNumber = '';
  secondNumber = '';
  document.getElementById("inputfield").innerHTML = '';
});

buttonDot.addEventListener('click',function(){

whatPushed(".")
});





buttonEquals.addEventListener('click',function(){

  var equation = firstNumber + symbol + secondNumber + '=';

  if(isNaN(Number(firstNumber)) || isNaN(Number(secondNumber)))
    document.getElementById("inputfield").innerHTML = equation + "<br>" + "ERR:NONREAL ANS";
  else if(symbol == "+")
    document.getElementById("inputfield").innerHTML = equation + "<br>" + (Number(firstNumber) + Number(secondNumber));
  else if(symbol == "-")
    document.getElementById("inputfield").innerHTML = equation + "<br>" + (Number(firstNumber) - Number(secondNumber));
  else if(symbol == "*")
    document.getElementById("inputfield").innerHTML = equation + "<br>" + (Number(firstNumber) * Number(secondNumber));
  else if(symbol == "/")
    document.getElementById("inputfield").innerHTML = equation + "<br>" + (Number(firstNumber) / Number(secondNumber));
  else if(symbol == "^")
    document.getElementById("inputfield").innerHTML = equation + "<br>" + (Math.pow(Number(firstNumber),Number(secondNumber)));
  else if(symbol == "√")
    document.getElementById("inputfield").innerHTML = equation + "<br>" + (Math.sqrt(Number(secondNumber)));
  else {

  }

  symbol = '';
  firstNumber = '';
  secondNumber = '';

});
