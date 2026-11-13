let h1 = document.querySelector("h1");

//ye ham listener create kr rahe hai kal ko agar h1 pe click hua to ye listener kal ko h1 pe double click hua to aur ek listener agai mouse aaya to ek aur listener add kr sakate hai
h1.addEventListener("click", function(){
    h1.style.color = "red";
})

h1.addEventListener("dblclick", function () {
  h1.style.color = "blue";
});

//removing eventlistener

h1.removeEventListener("click", function () {
  console.log("h1 pe click hua");
});

//another tarika
function dblclick(){
    h1.style.color = "blue";
}

h1.addEventListener("dblclick", dblclick);

h1.removeEventListener("dblclick", dblclick);

//mouseOver event
h1.addEventListener("mouseover", function () {
  h1.style.color = "green";
});

//keydown event -- kahi bhi key press krne pe ye event trigger hoga
