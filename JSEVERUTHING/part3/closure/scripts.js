// closure s hote hai functions jo ki kisi parent function ke andar ho, aur andar wala function return ho raha ho, and returning function use kre parent function ka koi variable



//fayada kya hai
//fayade 
//private variables
//global pollution


function abcd(){
    let a = 10;
    function dfg(){
        console.log(a);
    };
}



//ye sch bat hai fnction ke khatam hone pe aapka function and uska var khtm hojata hai, par jab bhi closure banata hai to aapka fnc aur uske variables ka ek backlink bnaya jaata hai aur uska naam hota hai [[environent]]



function coountDorme() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}

let count = coountDorme(); //ye countDorme function ke andar jo function return ho raha hai usko store krna padega

count(); //1
count(); //2
count(); //3

let cnt = coountDorme(); 
cnt(); //1
cnt(); //2
cnt(); //3
cnt(); //4

function createToaster(config) {
    return function () {
    }
}

let toaster = createToaster({
    color: "red",
    size: "small"
}); //ye toaster object ko store krna padega

toaster("Toaster is ready"); 


abcd(); //ye kuch bhi print nahi karega kyuki abcd function ke andar dfg function ko call nahi kiya gaya hai
//toh abcd function ke andar dfg function ko call karna padega

function abcd(){
    let a = 10;
    function dfg(){
        console.log(a);
    };
    return dfg;
}

function a(){
    let a = 10;
    return function() {
        console.log(a);
    }
}

let ab = a(); //usko store krna padega, kyuki a function ke andar jo function return ho raha hai

//ab bhi ek function hua, use call krna padega

ab(); //10



