// Array
var ourArray = ["banana" , "apple" , "melon"];
var ourFruit = ourArray[1]; // our fruit equals to apple

var carList = ["audi" , "volvo" , "nissan"];
var ourCar = carList[0]; // our car equals to audi

/* console.log(ourCar);
console.log(ourFruit); */

// change value out of attribute 

ourArray[1] = "Strawberry";
carList[0] = "Tesla";

/* console.log(ourArray[1]);
console.log(carList[0]); */

// multidimensional arrays

var multiArray = [[10,15,20], [1,2,3], [7,8,9],[[21,22,23],12,13]]

var changeArray = multiArray[2][0]; // show us 7 

//console.log(changeArray);

// push array to another array 

var myInfo = [["Hamdi",21], ["Software developer", 2021]]
myInfo.push(["Javascript", "freeCodeCamp"]);

/* console.log(myInfo); */

// remove array to main array

var Person = [["Micheal", 45], ["Kevin",47]];
var removeFromPerson = Person.pop()

// remove last child with pop() attribute

/* console.log(Person); */

// remove first child with shift() attribute

var removeFromPerson = Person.shift();

/* console.log(Person); */

// then our array blank

// add new value to array in 0 index's value with unshift() attribute

var Animals = ["dog", "cat", "rabbit"]
Animals.unshift("rat");
/* console.log(Animals); */


// hello world with function

function Greeting(){
    console.log("Hello, World!")
}
/* Greeting(); */

// Math in the function

function Math(a,b){
    console.log(a-b); 
    console.log(a+b);
    console.log(a/b);
    console.log(a*b);
    console.log(a%b);
}
/* Math(10,5); */


// about global vs local scope and if/else statements

var myGlobal = 10;

function fun1(){
    oopsGlobal = 5; // use generaly without var,let or const
}

function fun2(){
    var output = "";
    if (typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    } 
    if (typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: " + oopsGlobal
    }
    /* console.log(output) */
}
fun1();
fun2();

// change value 

var outerWear = "T-Shirt"; // if I use const, changeability is not possibility

function myOutfit(){
    var outerWear = "sweater";
    return outerWear;
}
/* console.log(myOutfit());
console.log(outerWear); */ // its still t-shirt becase we out of the function

function nexInline(arr, item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

/* console.log("Before: " + JSON.stringify(testArr)); */ // JSON.stringify is just a way to change an array into a string.
/* console.log(nexInline(testArr, 6));  */// 6 in place of item
/* console.log("After: " + JSON.stringify(testArr)); */


//boolean values

 function TrueFalse(B){
     if (B){
         return "Yes, that was true";
     } 
     if (!B){
         return "No, that was false"; // "!B" is another type of "else" 
     }
 }
 /* console.log(TrueFalse(true)); */

 function test(X){
     if (X == 10) {
         return "It's number 10"
     } else {
         return `Your number is ${X}`
     }
 }
/*  console.log(test(15)); */

// different mean's of type's

/* 3 === 3 return true
3 === "3" return false */

function Equal(a, b){
    if (a === b){
        return "a and b are number"
    }
    if (a == b){
        return "a is string and b is number"
    } 
}
/* console.log(Equal("8", 8)); */


// and "&" , or "||" 

function And(val){
    if(val <= 50 && val >= 25){ // both condition should be true
        return "Yes";
    } 
    return "No";
}
function Or(val){
    if(val <= 50 || val >= 25){ // only one condition is true
        return "Yes";
    } 
    return "No";
}

/* console.log(Or(25));
console.log(And(30)); */


// mini project

var Teams = ["Barca", "Real Madrid", "Club Atletico de Madrid", "Osasuna"]

function Champion(par, point){
    if (point == 1){
        return Teams[0]
    } else if (point <= par -1){
        return Teams[1]
    }
     else if (point <= par){
        return Teams[2]
    }

     else if (point <= par +1){
        return Teams[3]
    }
}
/* console.log(Champion(4,4)) */


// switch/case statements

function SwitchCase(val){
    let NobelPrice = "";
    switch(val){
        case 1:
            NobelPrice = "Leipniz";
            break;
        case 2: 
            NobelPrice = "Murphy";
            break;
        case 3: 
            NobelPrice = "Newton";
            break;
        case 4: 
            NobelPrice = "Pascal";
            break;
        case 5:
            NobelPrice = "Einstein"
            break;
        default: // like else statement
            NobelPrice = "Euler"
            break;
    }
    return NobelPrice;
}
/* console.log(SwitchCase(1)) */

var myPets = {
    "dogName": "Java" ,
    "catName": "Vue" ,
    "fishName": "Sue"
}
myPets.dogName = "Blackie"
delete myPets.fishName
/* console.log(myPets); */

// a little challenge about nested arrays

var collection = {
    "2548":{
        "album" : "Slippery When Wet",
        "artist" : "Bon Jovi",
        "tracks" : [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album" : "1999",
        "artist" : "Prince",
        "tracks" : [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist" : "Robert Palmer",
        "tracks" : [ ]
    },
    "5439" : {
        "album" : "ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function uptadeRecords( id, prop, value){
        if (value === ""){
            delete collection[id][prop];
        } else if (prop === "tracks"){
            collection[id][prop] = collection[id][prop] || [];
            collection[id][prop].push(value);
        } else {
            collection[id][prop] = value ;
        }
    
        return collection;
}

uptadeRecords(2468, "tracks", "test");
/* console.log(uptadeRecords(5439, "artist", "ABBA")); */


// push value to empty array with "while" statement

var HMK = [];

var i = 0;
while(i <= 5){
    HMK.push(i)
    i++;
}
/* console.log(HMK) */

// do it on the single line with "for" loop statement

var KMH = [];
for (var i = 0; i < 5; i++){
    KMH.push(i)
}
/* console.log(KMH) */

// ".length" 

var myDizi = [2,3,4,5,6];
var total = 0;

for (var i = 0; i< myDizi.length; i++){
    total += myDizi[i];
}
/* console.log(total); */

// do/while loops 

var BigArray = [];
var i = 10;

do {
    BigArray.push(i);
    i++;
} while (i < 5)
/* console.log(i, BigArray); */


// code challenge

var concats = [
     {
         "firstName":"Hamdi Mert",
         "lastName": "Kepenek",
         "likes" : ["Coding", "Reading", "Research"]
     },
     {
        "firstName":"Harry",
        "lastName": "Potter",
        "likes" : ["Hogwarts", "Magic", "Hagrid"]
     },
     {
        "firstName":"Albert",
        "lastName": "Einstein",
        "likes" : ["Math", "Physics", "Quantum"]
     }
];

function lookUpProfile(name, prop){

    for (var i = 0; i < concats.length; i++){
        if (concats[i].firstName === name){
            return concats[i][prop] || "No such property";
        }
    }
    return "No such contact";
}

var data = lookUpProfile("Hamdi Mert", "likes");

/* console.log(data);*/


// Math.floor and Math.random 

function randomNumber(){
    return Math.floor(Math.random() * 10); // we scan 0-10 random number.
}
/* console.log(randomNumber()); */


// Conditional (ternary) operators (My favorite!)

function checkEqual(x, y){
    return x === y ? true : false;
}
/* console.log(checkEqual(1,2)) */

function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
/* console.log(checkSign(-10)) */

// arrow function (ES6)

var hello;

hello = () =>{
    return "Hello World!";
}
/* console.log(hello()) */

// [...blabla] (include all stuff our array)

const arr1 = ["Pasta", "Burger" , "Pizza" , "Macarone"];
let arr2 ; 
(function(){
    arr2 = [...arr1] + ", Kebab";
})();
/* console.log(arr2) */


// skip element 

const [z, x, , y, ,t] = [1,2,3,4,5,6]; // skip 3 and 5
/* console.log(z, x, y,t)  */

//  constructor

function makeClass(){
    class Thermostat {
        constructor(temp){
            this._temp = 5/9 *(temp - 32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(uptadedTemp){
            this._temp = uptadedTemp;
        }
    }
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat (76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

// import, export 

import * as capitalizeString from "./string_function"
const cap = capitalizeString("Hello");

console.log(cap);