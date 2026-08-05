//day 3 task 1 
/*
var fullName = prompt("Enter your full name:");
fullName = fullName.trim();
var words = fullName.split(" ");
var result = "";
for (var i = 0; i < words.length; i++) {

    if (words[i] != "") {

        var firstLetter = words[i].charAt(0).toUpperCase();
        var rest = words[i].slice(1).toLowerCase();

        result += firstLetter + rest + " ";
    }
}
result = result.trim();
console.log(result);
var count = 0;
for (var i = 0; i < result.length; i++) {

    if (result[i] != " ") {
        count++;
    }
}
console.log("Characters numbers , spaces not countedd: " + count);
*/
//task 2 
/*
var email = prompt("Enter your email:");
if ( email.includes("@") && email.endsWith(".com") 
    && !email.startsWith("@") && !email.includes(" ") ) {
    console.log("Valid Email");
} else {
    console.log("Invalid Email");
}
    */
//task 3 
/*
var text = prompt("Enter text:");
var character = prompt("Enter character:");
var count = 0;
text = text.toLowerCase();
character = character.toLowerCase();
for (var i = 0; i < text.length; i++) {
    if (text[i] == character) {
        count++;
    }
}
console.log("got counted : " + count);
*/
//task 4
/*
var sentence = prompt("enter sentence:");
var word = prompt("enter target word :");
var result = sentence.replaceAll(word, "******");
console.log(result);
*/
//task 5
/*
var first = prompt("first name") ;
var last = prompt("last name");
var username = first.trim().toLowerCase()  +  "." + last.trim().toLowerCase() ;
if (username.length > 15) {
    username = username.slice(0, 15);
}
console.log(username);
*/
//task 6 
/*
var sentence = prompt("enter sentence:");
var word = prompt("enter word:");

if (sentence.includes(word)) {
console.log("exist");
console.log("first position index: " + sentence.indexOf(word));
console.log("last position index : " + sentence.lastIndexOf(word));

var count = 0;
var pos = sentence.indexOf(word);

while (pos != -1) {
    count++;
    pos = sentence.indexOf(word, pos + word.length);
}

console.log("total number of occurrences: " + count);

} else {
    console.log("doesnt exist enter a valid word");
}
    */
   
//task 7
/*  
var sentence = prompt("enter sentence:");
var words = sentence.split(" ");
var result = "";
for (var i = 0; i < words.length; i++) {

    var reversed = "";

    for (var j = words[i].length - 1; j >= 0; j--) {
        reversed += words[i][j];
    }

    result += reversed + " ";
}
console.log(result);
*/
//task 8 
/*
var text = prompt("enter text");
text = text.trim();
var words = text.split(" ");
var chars = 0;
var vowels = 0;
var digits = 0;
var upper = 0;
var lower = 0;

for (var i = 0; i < text.length; i++) {

    var ch = text[i];
     if (ch != " ") {
        chars++;
    }

if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" ||
    ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U") {
    vowels++;
}
if (ch >= "0" && ch <= "9") {
        digits++;
}
if (ch >= "A" && ch <= "Z") {
        upper++;
}
if (ch >= "a" && ch <= "z") {
        lower++;
}
}

var longest = words[0];
var shortest = words[0];

for (var i = 1; i < words.length; i++) {

    if (words[i].length > longest.length) {
        longest = words[i];
    }
    if (words[i].length < shortest.length) {
        shortest = words[i];
    }
}

console.log("number of words " + words.length);
console.log("characters excluding spaces: " + chars);
console.log("vowels : " + vowels);
console.log("digits : " + digits);
console.log("uppercase letters: " + upper);
console.log("llowercase letters: " + lower);
console.log(" the longest word: " + longest);
console.log("the shortest word.: " + shortest);
*/
//task 9
/*
var phoneno = prompt("phone number:");
var result = "";
for (var i = 0; i < phoneno.length; i++) {
    if (i < 4 || i >= phoneno.length - 3)
        result += phoneno[i];
    else
        result += "*";
}
console.log(result);
*/
//task 10 
/*
var sentence = prompt("enter sentence:");
sentence = sentence.trim();
sentence = sentence.replaceAll("javascript", "JavaScript");
var firstLetter = sentence.charAt(0).toUpperCase();
sentence = firstLetter + sentence.slice(1);
if (sentence.charAt(sentence.length - 1) != ".") {
    sentence = sentence + ".";
}
console.log(sentence);
*/
//bonus task
/*
while(true){

var choice=prompt(
"1:uppercase\n"+
"2:lowercase\n"+
"3:count characters\n"+
"4:count words\n"+
"5:search for word\n"+
"6:replace word\n"+
"7:reverse text\n"+
"8:exit"
);

if(choice == 8){
    break;
}

var text=prompt("Enter your text:");

switch(choice){

case "1":
console.log(text.toUpperCase());
break;


case "2":
console.log(text.toLowerCase());
break;


case "3":
console.log("Characters: "+text.length);
break;


case "4":
var words=text.split(" ");
console.log("Words: "+words.length);
break;

case "5":
var word=prompt("Enter word:");
if(text.indexOf(word)!=-1){
console.log("found");
}
else{
console.log("not found");
}
break;

case "6":
var oldWord=prompt("Enter old word:");
var newWord=prompt("Enter new word:");
text=text.replace(oldWord,newWord);
console.log(text);
break;

case "7":
var reversed="";
for(var i=text.length-1;i>=0;i--){
reversed+=text[i];
}
console.log(reversed);
break;


default:
console.log("Please enter a valid choice");
}

}
*/