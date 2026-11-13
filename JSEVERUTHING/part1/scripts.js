// var a;
var a = 12;
// let b;
// let b = 12;
// const c = 12;

//declarations and itializaton

// var a = 12;
//window mein add hota hai
//function scoped hota hai mtlb ye function ke andar use ho skta hai
//aap fir se declare kr skte ho same name se and error nahi ayega

// var a = 13;
// var a = 14;
// //no error


//var is function scoped and can be redeclared in the same scope

function test() {
  if(true){
    var a = 12;
    console.log(a); //12

  }
  console.log(a); //12 because var is function scoped
}

//ye sari pbl se baachane keliye hum let ka use krte hai -- var function me ahi bhi use ho sakata hai outside the block also, par sirf function ke andar not pure code ke andar

// let b = 12;
// let b = 15;
//error because let is block scoped and cannot be redeclared in the same scope

// const c = 12;
// const c = 15;
//error because const is block scoped and cannot be redeclared in the same scope

//always use let

// const discount = 12;
// let dulha = "lab";
// let dulhan = "laby";



//scope (global, block function)

// console.log(a);
//global - pure cod eme access kar sakate hai kyoki kule me create kr rakha hai, jo kisi bhi curly brcaes ke andar nahi hai, usko global scope kehte hai

// var a = 123;


{
  var a  = 12;//ye bhi kahi bhi use ho sakat ahai kyouki function me nahi hai.
}

//aapko pata hai aapka pura code ekk function ke andar run hota hai, to var a = 12; is code ko pura function ke andar run karega, to aap kahi bhi use kar sakte ho, chahe block ke andar ho ya bahar ho.


//block scope - curly braces ke andar jo variable create hota hai usko block scope kehte hai, block scope me variable sirf usi block ke andar access hota hai

let a = 10;
{
  let a = 20; //block scoped.let block ki respect krta hai.
  console.log(a); //20
}
console.log(a); //10

function () {
  let b = 12;
  if(true){
    let a = 15;
    console.log(a); //15
  }
  console.log(a); //error because a is not defined in this scope
}

//Reassighnment, reclaation

var a= 12;
a = 32; //allow this is reassigning a new value to a variable
var a = 15; //allow this is redeclaring a variable with the same name

let b = 12;
b = 32; //allow this is reassigning a new value to a variable
//let b = 15; //error because we cannot redeclare a variable with the same name

const c = 12;
//c = 32; //error because we cannot reassign a new value to a constant variable
//const c = 15; //error because we cannot redeclare a variable with the same name



//temporald dead zone - let and const ke case me, jab tak variable declare nahi hota hai, tab tak usko access nahi kar sakte hai, is time period ko temporal dead zone kehte hai

// console.log(a); //error because a is in temporal dead zone
// let a = 12;

//hoisting - var ke case me, variable declaration hoisting hota hai, mtlb variable declaration code ke top pe chala jata hai, isliye aap variable ko use kar sakte ho uske declaration se pehle bhi, lekin let aur const ke case me, variable declaration hoisting nahi hota hai, isliye aap variable ko use nahi kar sakte ho uske declaration se pehle bhi.

let d;
console.log(d); //undefined because d is declared but not initialized yet

var b;
console.log(b); //undefined because b is declared but not initialized yet

const c;
console.log(c);
//error because const variable must be initialized at the time of declaration


const person = {
  name: "John",
  age: 30,
};
person.name = "Doe"; //allow this is update property of object
//Object.freeze(person); //freeze the object to prevent any changes to it
console.log(person.name); //Doe
person = {}; //error because we cannot reassign a const variable

//sum of even numbers in an array using foreach
let arr = [1, 2, 3, 4, 5, 6];
let sum = 0;
arr.forEach((a) => {
  if (a % 2 == 0) {
    sum += a;
  }
});
console.log(sum); //12

let i = 1;
while (i < 32) {
  console.log(i);
  i++;
}

let j = 1;
do {
  if (j % 2 == 0) {
    console.log(j);
  }
  j++;
} while (j < 10);

for (let k = 1; k < 10; k++) {
  if (k == 5) break;
  console.log(k);
}
for (let k = 1; k < 10; k++) {
  if (k == 5) continue;
  console.log(k);
}

for (let k = 1; k < 10; k++) {
  if (k % 3 === 0) continue;
  console.log(k);
}

function createCounter() {
  let count = 0;
  return function () {
    count++;
  };
}

let outer = createCounter();
outer(); //1
outer(); //2

outer(); //3

function createbankAccount() {
  let balance = 0;
  return function deposite(amount) {
    balance += amount;
    console.log(balance);
  };
}

let account = createbankAccount();
account(100); //100
account(50); //150

function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

let double = multiplier(2);
double(5); //10
double(10); //20

function greet(greeting) {
  return function (name) {
    console.log(greeting + "" + name);
  };
}

let greet = greet("hello");
greet("john"); //hello john
greet("doe"); //hello doe

function createDiscount(discount) {
  let discountAmount = discount;
  return function (price) {
    return price * (discountAmount / 100);
  };
}

let tenPercentDiscount = createDiscount(0.1);
tenPercentDiscount(100); //10
tenPercentDiscount(200); //20

//iife to isolate variable

(function () {
  let password = "secret";
  console.log(password);
})();

console.log(password); //error because password is not defined in the global scope


//ARRAYS
