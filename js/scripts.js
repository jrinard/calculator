// Business (or back-end) logic:

// Addition

var add = function(n1, n2) {
  return n1 + n2;
};

// Subtraction

var subtract = function(n1, n2) {
  return n1 + n2;
};

// Multiplication

var multiply = function(n1, n2) {
  return n1 * n2;
};

// Division

var divide = function(n1, n2){
  return n1 / n2;
};


// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($("#add1").val());
    var num2 = parseInt($("#add2").val());
    var result = (add(num1, num2));
    $("#output").text(result);// calling -  takes result and returns text and places in output in html
  });
});
