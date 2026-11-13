console.log("hey1");    
setTimeout(function () {
    console.log("hey2");
}, 2000); //ye function 2 second ke baad execute hoga

console.log("hey3");

//sync async

//aisa ocde jo line by line chale wo sync code
//aisa code jo line by line nahi chale wo async code

//sync code
console.log("this is sync code 1");
console.log("this is sync code 2");
console.log("this is sync code 3");

//async code
setTimeout(function () {
    console.log("this is async code 1");
}, 2000);

setTimeout(function () {
    
console.log("this is async code 2");
}, 1000);

setTimeout(function () {
    console.log("this is async code 3");
}, 3000);                                               

