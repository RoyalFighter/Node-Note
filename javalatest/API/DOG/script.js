//https://dog.ceo/api/breeds/image/random
//api is database on cloud we are just fetching that content in our 
// .then is promise and is assynchronous programming (not line by line)
//json turns data into object type format has 2 key mesg and status
//asyn programming mean you have to wait for when you need to wait there is always use of then
// console.log('run first')
// fetch('https://dog.ceo/api/breeds/image/random')
//   .then(response => response.json())
//   //.then(data => console.log(data))
//   //or we can use this
//   .then(json =>console.log('run2nd',json))

//   console.log('run last')
//   //here first and last will tun first then 2nd will run bc js runs what he knows when data is being fetched from the api it takses like 2 sec in that time 1st and last runs

// fetching and showing dog image in dom
const dogImage=document.getElementById('dogImage')
const dogButton= document.getElementById('dogButton')
// fetch('https://dog.ceo/api/breeds/image/random')
//   .then(response => response.json())
//   .then(data => {
//     //data or json no matter
//     console.log(data.message)
//     //changing inner text of the dom ALSO CAN PASS H AND W
//     dogImage.innerHTML=`<img src='${data.message}'height=300 width'300>`
//   })
//using same thing in function

const getImage=()=>{fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(data => {
  //data or json no matter
  console.log(data.message)
  //changing inner text of the dom ALSO CAN PASS H AND W
  dogImage.innerHTML=`<img src='${data.message}'height=300 width'300>`
})}
dogButton.onclick=()=>getImage()
  