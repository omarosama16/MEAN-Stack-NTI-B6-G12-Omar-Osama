// Task 1 - 1 
/*
var String = "string";
var Number = 1;
var Boolean = true;
var Undefined = undefined;
var Null = null;

console.log(String);
console.log(Number);
console.log(Boolean);
console.log(Undefined);
console.log(Null);

console.log(typeof String);
console.log(typeof Number);
console.log(typeof Boolean);
console.log(typeof Undefined);
console.log(typeof Null);

var firstName = "Omar";
var lastName = "osama";
var fullName = firstName + " " + lastName;
console.log(fullName);

var firstName = "Omar";
var lastName = "osama";
var fullName = `${firstName} ${lastName}`;
console.log(fullName);
*/

// Task 1 - 2 
/*
var username = prompt("Enter username:");
var password = prompt("Enter password:");
if (username == "") {
    alert("Username is required");
} else if (password.length < 8) {
    alert("Password must be at least 8 characters");
} else {
     console.log(username);
    console.log(password);
}
*/
// task 2 
/*
var employeename = prompt("Enter your name:");
var employeeage = prompt("Enter your age:");
var yearsofexperience = prompt("Enter your years of experience:");
var rateing = Number(prompt("Enter your rating from 1 to 10:"));
if (rateing < 1 || rateing > 10) {
    alert("Rating must be between 1 and 10");
}
var careerlevel = "";
if (yearsofexperience < 2) {
    careerlevel = "Junior";
}else if (yearsofexperience >= 2 && yearsofexperience < 5) {
    careerlevel = "Mid-level";
}else if (yearsofexperience >= 5 && yearsofexperience < 10) {
    careerlevel = "Senior";
}else if (yearsofexperience >= 10) {
    careerlevel = "Expert";
}
var selfrate = "";
switch (true) {
    case rateing < 5:
        selfrate = "Needs Improvement";
        break;
    case rateing >= 5 && rateing <= 6:
        selfrate = "Average";
        break;
    case rateing >= 7 && rateing <= 8:
        selfrate = "Good";
        break;
    case rateing >= 9 && rateing <= 10:
        selfrate = "Excellent";
        break;
}
var date = new Date().getHours();
if (date < 12) {
    console.log("day shift")
}else if (date >= 12 && date < 24) {
    console.log("night shift")
}
var BaseSalary = 2000;
var Bonus = 0;
if (yearsofexperience <= 2) {
    Bonus = BaseSalary * (10/100);
}
if (yearsofexperience > 2 && yearsofexperience < 5) {
    Bonus = BaseSalary * (15/100);
}
if (yearsofexperience >= 5 ) {
    Bonus = BaseSalary * (20/100);
}
console.log(`Name: ${employeename}` );
console.log(`Age: ${employeeage}` );
console.log(`Years of Experience:  ${yearsofexperience}`);
console.log(`Career Level: ${careerlevel}`);
console.log(`Self Rating:  ${selfrate}`);
console.log(`Final Salary:  ${BaseSalary + Bonus}`);
window.alert(`Name: ${employeename}  Age: ${employeeage}  Years of Experience: ${yearsofexperience} 
     Career Level: ${careerlevel}   Self Rating: ${selfrate}  Final Salary: ${BaseSalary + Bonus}`);

document.getElementById("Final Report").innerText = ` Name: ${employeename}   Age: ${employeeage} 
 Years of Experience: ${yearsofexperience}
 Career Level: ${careerlevel}
 Self Rating: ${selfrate}
 Final Salary: ${BaseSalary + Bonus}`;
*/

//---
// Day 2 Tasks " loops "

// 1 
/*
for(var i = 1; i <= 10; i++) {
    console.log(i);
}
    */
  
//2
/*
for (var i = 2; i <= 20; i += 2) {
    console.log(i);
}
*/
//3
/*
var totalSales = 0;
for (var i = 1; i <= 15 ; i++) {
    totalSales += i;
}
console.log(totalSales);
*/
//4
/*
var i = 1;
while (i <= 7) {
    console.log(i);
    i++;
}
*/
//5
/*
var i = 1
while ( i <= 8 ){
  console.log("Countdown: ",i);
  i++;
}
  */
//6
/*
var i = 4
do {
    console.log(i+1);
} while (i=4);
 */
//7
/*
var itemsincart = 10;
while (itemsincart < 5) {
    console.log("Start Shopping");
}
do {
    console.log("Start Shopping");
} while ( itemsincart < 5);
 */
//8
/*
var username = "Ali";
var Age = 22;
var isStudent = true;

console.log(username, " Type:", typeof username);
console.log(Age, " Type:", typeof Age);
console.log(isStudent, " Type:", typeof isStudent);
*/
//9
/*
var dbPrice = 10 , inputPrice = "10" ;
console.log( dbPrice == inputPrice ); // compares the values
console.log ( dbPrice === inputPrice ); // compares the values , datatypes
*/
//10
/*
var username = (prompt("enter your username "));
console.log(`Welcome, ${username}`);
window.alert(`welcome ,${username}`);
*/
//11
/*
var amount = (prompt("enter the amount"));
console.log(typeof +amount);
*/
/*
var amount = Number(prompt("enter the amount"));
console.log(typeof amount);
*/
/*
var amount = parseInt(prompt("Enter the amount"));
console.log(typeof amount);
*/
//12 
/*
var a = 10;
var b = 3;
console.log("add = " + (a + b));
console.log("minus = " + (a - b));
console.log("multiply = " + (a * b));
console.log("div = " + (a / b));
console.log("mod = " + (a % b));
console.log("power = " + (a ** b));
*/
//13 
/*
var age = Number(prompt("Enter your age"));
if (age >= 18) {
    console.log("You can enter");
} else {
    console.log("Sorry, underage");
}
    */
//14
/*
var grade = Number(prompt("Enter your grade"));
if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else if (grade >= 60) {
    console.log("D");
} else {
    console.log("F");
}  
    */
//15
/*
var age = Number(prompt("Enter your age"));
console.log(age >= 18 ? "Adult" : "Minor");   
*/
//16
/* 
var day = prompt("Enter the day (Sunday,Monday,Thusday,Wednesday,Thursday,Friday,Saturday");
switch (day) {
case "Friday":
case "Saturday":
    console.log("Weekend");
    break;

case "Sunday":
case "Monday":
case "Thusday":
case "Wednesday":
    console.log("Workday");
    break;

case "Thursday":
    console.log("Almost Weekend");
    break;

default:
    console.log("Invalid day");
}
*/
//17
/*
var price = Number(prompt("Enter product price"));
for (var i = 1; i <= 10; i++) {
    console.log(i + " x " + price + " = " + (i * price));
} 
 */
//18
/*
var size = Number(prompt("Enter file size"));

if (size > 0) {
    for (var i = 0; i <= size; i++) {
        console.log(i);
    }
} else {
    console.log("Invalid file size");
} 
    */ 
//19
/*
var start = Number(prompt("Enter start number"));
var end = Number(prompt("Enter end number"));
for (var i = start; i <= end; i++) {
    if (i % 2 == 0) {
        console.log(i + "  express");
    } else if( i % 2 == 1 ) {
        console.log(i + "  normal");
    }
}    
    */
//20
/*
var students = ["Ahmed", "Omaar", "Layla", "Mariam"];
for (var i = 0 ; i < students.length; i++) {
    console.log("Student " + (i+1) + ":  " + students[i]);
}
    */
//21 
/*
var total = 0;
var expense;
for (var i = 1; i <= 5; i++) {
    expense = Number(prompt("Enter expense"));
    total = total + expense;
}
console.log("total:" + total);
console.log("avg: " + (total / 5));  
*/
//22
/* 
var correctPin = "1234";
var attempts = 0;
var pin;
while (attempts < 3) {
    pin = prompt("Enter your pin");

    if (pin == correctPin) {
        console.log("Loged in succesfully");
        break;
    }

    attempts++;
}
if (attempts == 3 && pin != correctPin) {
    console.log("login failed");
}
*/
//23    
/*
var hasAccount = true;
var isVerified = false;
console.log(hasAccount && isVerified);
console.log(hasAccount || isVerified);
console.log(!hasAccount);
if (hasAccount && isVerified) {
    console.log("Welcome back");
} else if (hasAccount && !isVerified) {
    console.log("Please verify your account");
} else {
    console.log("Please sign up");
}
    */
//24
/*
var a = 40;
var b = 50;
var c = Number("60");
var d = 30;
var e = 30;
var totall = a + b + c + d + e;
console.log(totall);
if (totall <= 20) {
    for (var i = 1; i <= totall ; i++) {
        console.log(i);
    }
} else {
    console.log("Too big to print line by line");
}   
    */
//25..
/*
var n = Number(prompt("Enter a number"));
if (n < 0) {
    console.log("Invalid");
} else {
 var factorial = 1;

for (var i = 1; i <= n; i++) {
    factorial = factorial * i;
    }
console.log(n + "! =   " + factorial);
alert(n + "! =   " + factorial);
}   
*/