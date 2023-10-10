// let fruits=["apple","banana","cherry"];
// console.log(fruits);
//to randomly select a fruit from the array
// const randomFruit=(fruits)=>{
//     let random=Math.floor(Math.random()*fruits.length);
//     return fruits[random];
// }
// fruits=["apple","banana","cherry","orange","grapes"];
// console.log(randomFruit(fruits));


// if else if
const weatherScore=(weather)=>{
    let msg
    if (weather == "sunny"){
        msg="It's a nice day"
        
    }
    else if (weather=="rainy"){
        msg="It's raining"
    }
    else{
        msg="It's a cloudy day"
    }
    return msg
}

console.log(weatherScore('sunny'));