var minus = document.getElementById("minus").addEventListener("click", subtractNumbers);
var plus = document.getElementById("plus").addEventListener("click", addNumbers);
var divide = document.getElementById("divide").addEventListener("click", divideNumbers);
var multiply = document.getElementById("multiply").addEventListener("click", multiplyNumbers);
var clear = document.getElementById("clear").addEventListener("click", clearButton);
var equals = document.getElementById("equals").addEventListener("click", equalsButton);
var numbers = document.getElementsByClassName("buttonNum");
for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", displayNumbers);
}

var display_window = document.getElementById("screen");
//global variables
var display_reset = false;
var soft_reset = true;
var secondary_digit;
var operator_symbol;
var equal_digit;
var equals_secondary_digit;

function displayNumbers() {
  displayReseting();
  var value = this.innerHTML;
  display_window.innerHTML += value;
}

function displayReseting() {
  while (!display_reset) {
    clearButton();
    equals_secondary_digit = "";
    display_reset = true;
  }
  while (!soft_reset) {
    secondary_digit = display_window.innerHTML;
    display_window.innerHTML = "";
    soft_reset = true;
  }
}

function clearButton() {
  display_window.innerHTML = "";
  equal_digit = "";
  secondary_digit = "";
}

function equalsButton() {
  var math_it_up = {
    "+": function(x, y) {
      display_window.innerHTML = x + y
      equals_secondary_digit = display_window.innerHTML;
      secondary_digit = "";
      display_reset = false;
    },
    "-": function(x, y) {
      display_window.innerHTML = x - y
      equals_secondary_digit = display_window.innerHTML;
      secondary_digit = "";
      display_reset = false;
    },
    "*": function(x, y) {
      display_window.innerHTML = x * y
      equals_secondary_digit = display_window.innerHTML;
      secondary_digit = "";
      display_reset = false;
    },
    "/": function(x, y) {
      display_window.innerHTML = x / y
      equals_secondary_digit = display_window.innerHTML;
      secondary_digit = "";
      display_reset = false;
    }
  }
  if (!equal_digit) {
    equal_digit = display_window.innerHTML;
  }
  if (secondary_digit) {
    math_it_up[operator_symbol](parseFloat(secondary_digit), parseFloat(equal_digit));
  } else {
    math_it_up[operator_symbol](parseFloat(equals_secondary_digit), parseFloat(equal_digit));
  }
}

function addNumbers() {
  displayReseting();
  operator_symbol = "+";
  if (secondary_digit) {
    display_window.innerHTML = (parseFloat(secondary_digit) + parseFloat(display_window.innerHTML));
    secondary_digit = "";
  } else {
    secondary_digit = display_window.innerHTML;
    display_window.innerHTML = "";
  }
}

function subtractNumbers() {
  displayReseting();
  operator_symbol = "-";
  if (secondary_digit) {
    display_window.innerHTML = (parseFloat(secondary_digit) - parseFloat(display_window.innerHTML));
    secondary_digit = "";
  } else {
    secondary_digit = display_window.innerHTML;
    display_window.innerHTML = "";
  }
}

function divideNumbers() {
  displayReseting();
  operator_symbol = "/";
  if (secondary_digit) {
    display_window.innerHTML = (parseFloat(secondary_digit) / parseFloat(display_window.innerHTML));
    secondary_digit = "";
  } else {
    secondary_digit = display_window.innerHTML;
    display_window.innerHTML = "";
  }
}

function multiplyNumbers() {
  displayReseting();
  operator_symbol = "*";
  if (secondary_digit) {
    display_window.innerHTML = (parseFloat(secondary_digit) * parseFloat(display_window.innerHTML));
    secondary_digit = "";
    soft_reset = false;
  } else {
    secondary_digit = display_window.innerHTML;
    display_window.innerHTML = "";
  }
}
