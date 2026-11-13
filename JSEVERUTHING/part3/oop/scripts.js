function CreateBisciut(){
    this.name = "Bisciut";
    this.price = 10;
    this.color = "brown";
    this.taste = "sweet";
    this.eat = function () {
        console.log("Eating the bisciut");
    };
    this.open = function () {
        console.log("Opening the bisciut");
    };  
    this.close = function () {
        console.log("Closing the bisciut");
    };


}

let bus1  = new CreateBisciut(); //ye bus1 object create kr dega, bus1 ke andar CreateBisciut function ke andar jo bhi properties aur methods hai wo aa jayenge

console.log(bus1); //ye bus1 object ko show karega, jisme name, price, color, taste, eat, open, close properties aur methods honge


