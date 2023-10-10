
let red = document.getElementById("r");
let yellow = document.getElementById("y");
let green = document.getElementById("g");
red.onclick = ()=>console.log("red");

yellow.onclick = ()=>console.log("yellow");
green.onclick = ()=>console.log("green");
//instead of selecting each div manualy we can assign same class name to each div and can access them at once
const square = document.querySelectorAll(".squ");
console.log(square);