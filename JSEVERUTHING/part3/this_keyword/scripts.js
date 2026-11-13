//this keyword special keyword hai, kyuki jaise ki baaki sare keyword ki value ya unka nature same rehata hai this ki value ka nature badal jata hai es baat se ki aap use kaha use kar rahe ho

//-this in global scope, function, method, -event handler, class

//global scope
console.log(this); //ye global object ko show karega //browser me window object ko show karega

// --> ye window kya hai --> pradhanmantri ji ke ghar me ek bada sa kamra hai jisme sare log rehte hai, us kamre ko window kehte hai, aur us kamre me jo bhi cheeze hoti hai wo global object ke andar hoti hai, jaise ki aapke ghar me jo bhi cheeze hoti hai wo aapke kamre me hoti hai, toh window ke andar jo bhi cheeze hoti hai wo global object ke andar hoti hai


function cn(){
    console.log(this); //ye bhi global object ko show karega, kyuki function ke andar bhi this ki value global object hoti hai
}

let obj1 = {
    name = "harsh",
    //ek aisa function jo obj1 ke andar hai usko method kehte hai, aur method ke andar this ki value us object hoti hai jiske andar wo method hota hai
    sayName= function (){
        console.log(this); 
    }, //
}

obj1.sayName(); //{name ="harsh", sayName: ƒ} 

//so tis method ke andar pura object hai to haum this.name bhi kar sakate hai, toh this.name se hume "harsh" milega

let obj = {
    name = "puja",
    sayName = function () {
        console.log(this.name);
    },
}

obj.sayName(); //puja

//event handler me kya hota hai


