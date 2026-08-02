//task1
/*
 console.log("JS is running successfully");
*/

//task2
/*
window.alert("ready to Practice");
*/

//task 3
/*
var productName = "Laptop" , price = 15000 ,isAvailable = true;
console.log(productName, typeof productName);
console.log(price, typeof price);
console.log(isAvailable, typeof isAvailable);
*/

// task 4 
/*
document.getElementById("mainTitle").innerText = "Practice Time";
*/
//Task 5
/*
var city = "Cairo" , country = "Egypt" ;
console.log( city + ", " + country);
*/

// Task 6
/*
var city = "Cairo" , country = "Egypt" ;
console.log(`Location: ${city} - ${country}`);
*/

//task 7 
/*
var itemprice = 120 ;
var itemQuantity = 3 ;
var totalPrice = itemprice * itemQuantity ;
console.log(`total price: ${totalPrice}`);
console.log(`if 400 paid : ${400 - totalPrice}`);
console.log(`multiplication : ${itemprice * itemQuantity}`);
console.log(`division : ${itemprice / itemQuantity}`);
console.log(`mod : ${itemprice % itemQuantity}`);
console.log(`power : ${itemprice ** itemQuantity}`);

*/

//task 8
/*
var favoriteColor = prompt("What is your favorite color?");
console.log(`your Favorite Color is: ${favoriteColor}`);
*/

//task 9
/*
var score = 20, textScore = "20" ;
console.log(score == textScore); 
console.log(score === textScore); 
// == compares only values , === compares values and data types 
*/
//task 10
// using Number
/*
var value = prompt("enter any number");
value = Number(value);
console.log(value);
console.log(typeof value);
*/
// using parseInt 
/*
var value = prompt("enter any number");
value = parseInt(value);
console.log(value);
console.log(typeof value);
*/
//using +value
/*
var value = prompt("enter any number");
value = +value;
console.log(value);
console.log(typeof value);
*/

//task 11 
/*
var fruit = ["apple", "banana", "mango"];
console.log(fruit[1]);
fruit[1] = "orange";
fruit.push("grape");
console.log(fruit.length);
*/
//task 12
/*
var course = {
    level: 1 ,
    hours: 120,
    title: "Mean Stack",
};
course.title = "Test";
console.log(course.hours);
console.log(course);
*/

//task 13

/*
var hasAccount = true ,  isVerified = false;
console.log(hasAccount && isVerified);
console.log(hasAccount || isVerified);
console.log(!hasAccount);
*/

//task 14

/*
var balance = 50;
balance += 30;
balance *= 2;
balance -= 20;
console.log(balance);
*/

//task 15
/*
var hotel = prompt("hotel name:");
var nights = prompt("no of nights");
var confirmation = confirm("Are you sure?");
window.alert(`hotel: ${hotel}  Nights: ${nights}  Confirmation: ${confirmation}`);
*/

//task 16
/*
console.log(2 + 8 + "0"); //100 
console.log("2" + 8 + 0); //280
console.log(2 + "8" + 0); //280
*/

//task 17
/*
//1
var city1 = "Alex"; var city2 = city1; city2 = "Giza"; console.log(city1, city2); 
//value in city 1 didnt change because it didnt have anything affecting it
// value in city 2 changed because it was assigned to a new value after being assigned to city 1 
*/

// 2
/*
var car1 = { brand: "Toyota" };
var car2 = car1;
car2.brand = "Honda";
console.log(car1, car2); 
// value of car 2 got assigned to value of car 1 so it changed it 
*/

//3 
/*
var car1 = { brand: "Toyota" };
var car2 = Object.assign({}, car1);
car2.brand = "Honda";
console.log(car1);
console.log(car2);
*/

//task 18
/*
var mixedBag = [
    "test",          
    12,               
    false,           
    null,             
    undefined,       
    { name: "Omar" },
    [1, 2, 3]        
];
console.log(typeof mixedBag[0]);
console.log(typeof mixedBag[1]); 
console.log(typeof mixedBag[2]); 
console.log(typeof mixedBag[3]); 
console.log(typeof mixedBag[4]); 
console.log(typeof mixedBag[5]); 
console.log(typeof mixedBag[6]); 
// typeof null === "object" bec it doesnt appear in dom 
*/
//task 19
//a 
/*
var customerName = prompt("customer name:");
var price = (prompt("order price:"));
var isPaid = confirm("payment confirmation");
var message = `Customer: ${customerName}  Price: ${price}  Paid: ${isPaid}`;
console.log(message);
*/
/*
var customerName = prompt("customer name:");
var price = (prompt("order price:"));
var isPaid = confirm("payment confirmation");
var message = `Customer: ${customerName}  Price: ${price}  Paid: ${isPaid}`;
alert(message);
*/
/*
var customerName = prompt("customer name:");
var price = (prompt("order price:"));
var isPaid = confirm("payment confirmation");
var message = `Customer: ${customerName}  Price: ${price}  Paid: ${isPaid}`;
document.getElementById("result").innerText = message;
*/
//task 20 
/*
var num1 = Number(prompt(" first number:"));
var num2 = Number(prompt(" second number:"));
console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);
console.log(`${num1} ** ${num2} = ${num1 ** num2}`);
*/
//task 21
/*
var a = 40;var b = 50;var c = "60";var d = 30;var e = 30;console.log(a + b + c + d + e);
the problem is c is a string so it will concatenate with the numbers instead of adding them
//after fixing 
var a = 40; var b = 50; var c = "60"; var d = 30; var e = 30; 
console.log(a + b + Number(c) + d + e);
*/
//task 22 
/*
function makeinvoiceLine() {
    var item = prompt("item:");
    var qty = prompt("quantity:");
    var paid = confirm("paid?");
     return `Invoice => Item: ${item} | Qty: ${qty} | Paid: ${paid}`;
}
document.getElementById("result").innerText = makeinvoiceLine();
*/
//task 23 
/*
function saveUsername() {
    var username = document.getElementById("username").value;
    var result = document.getElementById("result");
    if (username === "") {
         result.innerText = "username is required";
    } 
    else {
      result.innerText = `Saved Successfully: ${username}`;
    }
    console.log({
    username: username,
    status: "saved"
    });
}
*/
//task 24
/*
var a = "15";
var b = 15;
var c = null;
var d;
var e = [15];
var f = {value:15};
console.log(a, typeof a, a == 15, a === 15);
console.log(b, typeof b, b == 15, b === 15);
console.log(c, typeof c, c == 15, c === 15);
console.log(d, typeof d, d == 15, d === 15);
console.log(e, typeof e, e == 15, e === 15);
console.log(f, typeof f, f == 15, f === 15);
*/
//task 25 
/*
var productName = prompt("Enter product name:");
var brand = prompt("Enter brand:");
var price = Number(prompt("Enter price:"));
var category = prompt("Enter category:");
var instock = confirm("Is this product in stock?");
var productInfo = {
    productName, brand, price, category, instock
};
var message = `
Product: ${productName}  Brand: ${brand}
Price: ${price}       Category: ${category}
In Stock: ${instock}
`;
console.log(productInfo);
window.alert(message);          
document.getElementById("result").innerText = message;
console.log(productName[0]);
*/