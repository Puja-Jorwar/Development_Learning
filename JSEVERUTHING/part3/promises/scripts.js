//aap ek promise banate ho jo ki do states mein se ek state me jaa sakata hai and wo yaa to resolve hoga ya to reject hoga ab wo kya hoga ye to waqt batayega par hame dono ke liye code likhana pdata hai

//promise ke andar ek function hota hai jisme do parameters hote hai resolve and reject, aur jab aap promise ke andar koi kaam karte ho to aap resolve ya reject ko call karte ho, aur uske andar aap apna data pass karte ho, aur wo data aapko then me milta hai agar resolve hota hai to then me milta hai aur agar reject hota hai to catch me milta hai

let p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let a = 10;
        if (a == 10) {
            resolve("success");
        } else {
            reject("failure");
        }
    };, 2000);
});

p.then(function (data) {
    console.log(data); //success
}).catch(function (error) {
    console.log(error);
}); //failure
