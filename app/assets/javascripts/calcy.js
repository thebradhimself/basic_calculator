$(document).ready(function(){
  var $numberButton = $('.numButton');
  var $inputField = $('#inputfield');
  var $operatorButton = $('.operButton');
  var $equalButton = $('.equalsButton');
  var $clearScreenButton = $('.clsButton');
  var firstNumber = '';
  var secondNumber = '';
  var symbol = '';

  $numberButton.click(function(){
    symbol == '' ? firstNumber += this.value : secondNumber += this.value;
    $inputField.append(this.value);
  });

  $operatorButton.click(function(){
    symbol == '' ? $inputField.append(this.value) : alert('You\'ve already done that');
    symbol = this.value;
  });

  $equalButton.click(function(){
    if(symbol == '+' || symbol == '-' || symbol == "*" || symbol == '/'){
      $inputField.html(eval($inputField.html()));
      firstNumber = eval($inputField.html());
    }
    else if(symbol == "√")
      $inputField.html(Math.sqrt(secondNumber));
    else if(symbol == "^")
      $inputField.html(Math.pow(firstNumber, secondNumber));
    else{alert('you dun fucked up, son')}
    symbol = '';
    secondNumber = '';
  });

  $clearScreenButton.click(function(){
    symbol = '';
    firstNumber = '';
    secondNumber = '';
    $inputField.html('');
  });
});
