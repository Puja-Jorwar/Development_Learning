//css me aap aise select krte the
// h1{
//     color: red;
// }

//js me aise

// //1.
// documnet.querySelector;
// //2.
// document.getElementById;
// //3.Elements hai element nahi
// document.getElementsByClassName;
// //4.
// document.getElementsByTagName;
// //5.
// document.getElementsByName;

// let abcd = document.querySelector("h1");

// console.log(abcd);
// console.dir(abcd); //agar tag ke andar likahe aayeha

// documnet.getElementsByClassName("abcd") - //ye hume array jaisa structure dega jisme sare element honge jinke class name abcd hai
//   /*3/ test/Content access
//   innerText -
//   innerHTML -
//   innerContent;

// */

let h1 = document.querySelector("h1");
//console.dir(h1);

//it  will be in ket value pair that means they are object

h1.innerHTML = "<i>this is test content</i>";
h1.innerText = "this is test content12000";
//innerHTML - ye tag ke andar likhe huye content ko show karta hai
h1.textContent = "this is test content12000"; //ye innerText ki tarah hi kaam karta hai but ye hidden element ko bhi show karta hai

// 4./ Attribute manipulation:
// getAttribute,
// setAttribute,
// removeAttribute

let a = document.querySelector("a");
// console.dir(a);
a.href = "https://www.google.com"; //ye href attribute ko change kr dega

// console.log(a.getAttribute("href")); //ye href attribute ki value ko show karta hai

//one more way by setAttribute:
a.setAttribute("href", "https://www.facebook.com"); //ye bhi href attribute ko change kr dega

//removeAttribute
a.removeAttribute("href"); //ye href attribute ko remove kr dega    

// 5./ Dynamic DOM manipulation: 
// createElement, 
// appendChild, 
// removeChild, 
// prepend

let h1 = document.createElement("h1"); //ye h1 element create kr dega
h1.testContent = "this is dynamic h1"; //ye console pe aayega screen pe nahi
document.body.appendChild(h1); //ye h1 element ko body ke andar add kr dega

//create element 
//appen/prepend karo jaha bhi element chahiye waha

//prepend - > shuruwat me add krta hai
//append - > end me add krta hai

//removeChild - > element ko remove krta hai

// 6./ Style updates via: 
// style and classList (add, remove, toggle)

let h1 = document.querySelector("h1");

h1.style.color = "red"; //ye h1 element ka color red kr dega


h1.style.backagroundColor = "yellow"; //ye h1 element ka background color yellow kr dega

h1.style.textTransform = "capitalize"; //ye h1 element ke text ko capitalize kr dega

h1.style.fontSize = "50px"; //ye h1 element ke font size ko 50px kr dega



//classList - > ye hume element ke class ko manipulate krne me help krta hai
//add - > ye class ko add krta hai
//remove - > ye class ko remove krta hai
//toggle - > ye class ko toggle krta hai

// 7./ Confusion:
// Difference between innerText vs textContent vs innerHTML

//innerText - > ye tag ke andar likhe huye content ko show karta hai

//innerHTML - > ye tag ke andar likhe huye content ko show karta hai aur agar tag ke andar html code likha hai to usko bhi render kr dega
// aur ye tag ko insert krne keliye bhi use hoga 
// h1.innerHTML = "<i>this is test content</i>"; //ye h1 element ke andar i tag ke sath content ko show karega

/*
ye nya tarika hai content ko manipulate krne ka jo ki innerText aur innerHTML se alag hai aur faast hai
//textContent - > ye innerText ki tarah hi kaam karta hai but ye hidden element ko bhi show karta hai

*/