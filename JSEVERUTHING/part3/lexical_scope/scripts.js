//js - lexical scoping -> ki aap kaha par physically available ho ye poori tareeke se depend krta hai ki aap kya access kr paoge

function abcd () {
    let a = 10; //lexical position hai abcd to abcd me kahi bhi use  kr sakate ho
    function dfg(){
        console.log(a);//10
    }
}


//dynamic scoping -- ye hum follow nahi krte js me
// --> kaha se call kr rahe ho uspe depend krega ki kya value melegi
//

//ex
let a = 12;

function abc(){
    console.log(a);
}

function df(){
    let a = 10;
    abc(); //12 agar ye dynamically scop ed hota to 10 print hota
}
