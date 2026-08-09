//task 1
/*
function multiply(num1, num2) {
    return num1 * num2;
}
function calculate(num1, num2, operation) {
    return operation(num1, num2);
}
function displayResult(result) {
    console.log(result);
}
var result = calculate(5, 4, multiply);
displayResult(result);
*/
//Task 2
/*
function greetUser() {
    setTimeout(function() {
        console.log("Hello,User!");
    }, 3000);
}

greetUser();

function countdown() {
    var number = 10;

    var interval = setInterval(function() {
        console.log(number);
        number--;

        if (number == 0) {
            console.log("Time is up");
            clearInterval(interval);
        }
    }, 1000);
}

countdown();

function countdown2() {
    var number = 10;

    var interval = setInterval(function() {
        console.log(number);
        number--;
    }, 1000);

    setTimeout(function() {
        clearInterval(interval);
        console.log("Countdown stopped");
    }, 5000);
}
countdown2();
var message = setTimeout(function() {
    console.log("This will be cleared");
}, 5000);
clearTimeout(message);
*/