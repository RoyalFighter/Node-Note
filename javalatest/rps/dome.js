// const square = document.querySelectorAll(".squ");
// console.log(square);
// console.log(square[0].value);
// console.log(square[1].value);
// console.log(square[2].value);
//instead of doing this we can use for each loop
// square.forEach(square =>console.log(square.value));
//now we can loop thorough each squarea nd grab the value which is assign to each html element
// square.forEach(square=>{
//     square.onclick=()=>console.log(square.value);
// })
//now we want to count the number of times the user clicks on each square and show that value toparticular square
//for this we create obj which counts the number of times the user clicks on each square initially all value is set to 0
const square = document.querySelectorAll(".squ");
const count = {'red':0,'yellow':0,'green':0};
square.forEach(square=>{
    square.onclick=()=>{
        count[square.value]++;
        // console.log(count);
        square.innerHTML=count[square.value];
    }
})
//to clear we create function and lopp though each square and set the value to 0 or empty
//no we grab that button here
const clearBtn = document.getElementById("clr-btn");
clearBtn.onclick=()=>clear()
function clear (){
    square.forEach(square => square.innerText=0);
    }
