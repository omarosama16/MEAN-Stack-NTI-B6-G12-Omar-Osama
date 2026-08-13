// Part A — "use strict"
// 1 
/*
function createVariable() {
    message = "Hello world";
}
createVariable();
console.log(message);
*/
// it printed Hello world
// without stict mode js allow assigning a value to an undeclared var creating a global var

//2 
/*
function CreateVarWithStrict() {
    "use strict";
    try {
        message = "Hello";
    } catch (error) {
        console.log(error);
    }
}
CreateVarWithStrict();
*/
// ReferenceError: assignment to undeclared variable message
// bec  Strict doesnt allow assigning a value to a var without declaring it

// 3 
/*
function deleteTest() {
    "use strict";
    var localVar = "test";
    try {
        delete localVar;
    } catch (error) {
        console.log("Error:", error);
    }
    const student = {
        name: "Omar"
    };
    delete student.name;
    console.log(student);
}
deleteTest();
*/
// syntax error 

// Part B — Hoisting

//4
/*
console.log(x);
var x = 10;
console.log(x);
*/
/*
undefined  because it was alr undefined 
10         bec it was defined before
*/

//5 
/*
// Case 1 
 sayHi();
  function sayHi() { console.log("Hi"); }
  // will print hi 
  // bec functions are hostile it can be called before its actual declaration 
 
//Case 2
sayBye();

var sayBye = function () {
    console.log("Bye");
};
// prediction : Bye  
// Actual : Uncaught TypeError: sayBye is not a function
//The var declaration is hoisted but the function assignment is not
*/

//6 
/*
console.log(a);
let a = 5;
*/
// expected : syntax error
// actual : ReferenceError: Cannot access 'a' before initialization
// bec let is hoistedbut it is not initialized immediately 

// 7 
/*
var n = 1;
 function demo() {  console.log(n);  var n = 2;  console.log(n); } 
 demo();
  console.log(n);
  */
  /*
  undefiend
  2 
  1 
  */
// The local var n inside demo() is hoisted to the top of the function.

//Part C — var vs let vs const

//8 
/*
function varr() {
    if (true) {
        var message = "Hello";
    }
    console.log(message);
}
varr();
*/ 

//9
/*
function letttttttt() {
    if (true) {
        let name = "Omar";
        const age = 21;

        console.log(name);
        console.log(age);
    }
 console.log(name);
    // error
 console.log(age);
    // error
}
letttttttt();
*/

//10
/*
var scoree = 50;
var scoree = 100;
console.log(scoree);
let points = 50;
// let points = 100;
console.log(points);
*/

// 11 
/*
const student = {
    name: "Omar",
    age: 21,
    city: "Cairo"
};
student.age = 22;
console.log(student);
student.grade = "A";
console.log(student);
delete student.city;
console.log(student);
try {
    student = {
        name: "Ali",
        age: 20
    };
} catch (error) {
    console.log("Error:", error);
}
*/

//12
/*
const nums = [1, 2, 3];
nums.push(4);
console.log(nums);
nums[0] = 100;
console.log(nums);
try {
    nums = [5, 6, 7];
} catch (error) {
    console.log("Error:", error);
}
    */
// allowed push , change index 
// not allowed total reassigning

// 13
/*
var a;
console.log(a);
//undefiend
let b;
console.log(b);
//undef
const c;
console.log(c);
//error
*/

//14
// var global
// undefined
// undefined

//15 
/*
const handlers = {};
for (let i = 0; i < 3; i++) {
    handlers["fn" + i] = function () {
        return "index: " + i;
    };
}
console.log(handlers.fn0());
console.log(handlers.fn2());
*/

//Part D — Arrow Functions & Template Literals

//16
/*
const welcome = (name) => `Welcome, ${name}!`;
console.log(welcome("Omar"));
*/

//17
/*
const fullInfo = (first, last, age) => `${first} ${last} is ${age} years old`;
console.log(fullInfo("Omar", "Osama", 20));
*/

//18
/*
const multiply = (a, b) => a * b;
console.log(multiply(5, 6));

const addNumbers = (a, b) => {
    console.log("first num:", a);
    console.log("sec num:", b);

    return a + b;
};
console.log(addNumbers(5, 4));
*/

//Part E — Destructuring, Default, Rest, Spread

//19 
/*
const product = {
    title: "Laptop",
    price: 15000,
    inStock: true,
    brand: "Dell"
};
const { title, price, inStock } = product;
console.log(title);
console.log(price);
console.log(inStock);
*/

//20
/*
const techStack = ["HTML", "CSS", "JS", "React"];
const [first, second] = techStack;
console.log(first);
console.log(second);
*/

// 21 
/*
function greet(name = "Guest", message = "Hello") {
    return `${message}, ${name}!`;
}
console.log(greet("Omar", "Welcome")); // Welcome, Omar!
console.log(greet("Omar")); // Hello, Omar!
console.log(greet()); // Hello, Guest!
*/

//22 
// ...numbers collects input to array of nums
/*
function sumAll(...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));
*/

//23 
/*
const array1 = [1, 2];
const array2 = [3, 4, 5];
const mergedArray = [...array1, ...array2];
console.log(mergedArray);

const originalArray = [10, 20, 30];
const copiedArray = [...originalArray];
copiedArray.push(40);
console.log(originalArray);
console.log(copiedArray);
*/

//24 
/*
const user = {
    name: "Sara",
    age: 22
};
const contact = {
    email: "sara@nti.com",
    age: 23
};
const mergedUser = {
    ...user,
    ...contact
};
console.log(mergedUser);
*/
// 23 bec its after 22 in declaration

//25 
/*
const values = [2, 4, 6, 8];
function total(a, b, c, d) {
    return a + b + c + d;
}
console.log(total(...values)); // 20
*/

// Part F — Memory & Copying

// 26 
// omar 
// bec person 2 and person 1 point to same obj in memory 

// 27 
/*
const original = {
    name: "Mona",
    details: {
        city: "Cairo"
    }
};
const copy = { ...original };
copy.name = "Omar";
copy.details.city = "Alex";
console.log(original);
console.log(copy);
*/ 
// Spread makes a shallow copy  name is copied separately but details is still pointing to the same nested object.

// 28  
/*
const original = {
    name: "Mona",
    details: {
        city: "Cairo"
    }
};
const deepCopy = structuredClone(original);
deepCopy.details.city = "Alex";
console.log(original);
console.log(deepCopy);
*/
// nothing changed in original cuz deep copy make a copy of even nested info so nothing gets affected

//29 
/*
const userData = {
    name: "Ahmed",
    age: 26,
    city: "Alex"
};
localStorage.setItem("userdata", JSON.stringify(userData));
const data = localStorage.getItem("userdata");
const parsedData = JSON.parse(data);
console.log(typeof parsedData);
console.log(parsedData.name);
console.log(parsedData.age);
console.log(parsedData.city);
localStorage.removeItem("userdata");
console.log(localStorage.getItem("userdata"));
*/ 
 
// Part G — Challenge Mix

// 30 
/*
const APP_CONFIG = {
    name: "My App",
    version: "1.0",
    api: {
        baseUrl: "https://api.example.com",
        features: []
    },
    timeout: 5000
};
APP_CONFIG.api.features.push("Login");
console.log(APP_CONFIG);
try {
    APP_CONFIG = {
        name: "New App"
    };
} catch (error) {
    console.log(error);
}

*/

//31 
/*
function createCard(title, price = 0, ...tags) {
    return {
        title: title,
        price: price,
        tags: tags,
        label: `${title} - ${price} EGP`
    };
}
const card1 = createCard(
    "laptop",
    30000,
    "dell",
    "electronics"
);
const card2 = createCard(
    "mousepad",
    200,
    "gaming",
    "accesories"
);
console.log(card1);
console.log(card2);
*/

//32 
/*
const students = [
    { name: "omar", grade: 99 },
    { name: "essam", grade: 89 },
    { name: "ali", grade: 70 }
];

for (const { name, grade } of students) {
    console.log(`${name} scored ${grade}`);
}
    */