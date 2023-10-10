//ascynprogramming 
//promises
//you order tomato soup
//you continue your conv with friend
//RESOLVED: your server brings y0ou soup
//REJECTED: NO soup today :angry

// setTimeout(() => console.log('woeld'), 2000)
// const wait=()=>console.log('hello')
// setTimeout(wait, 2000) //wait for 2 sec to runthis function


//first promises
// const promise1=new Promise((resolve, reject) => {
//     setTimeout(() => {
//       isReady = false;
//       isReady ? resolve('your data is ready'):reject('no data today')
//     }, 2000)
// })//printed after 2 sec
// //we use .then if promise resolved ie sucess .then prints value like below
// //.catch is for rejection or faliure
// console.log(promise1.then(data=>console.log(data))
// .catch(err=>console.log(err)))
//can put any thing in the place of data 0r err like value or ram


// selecting true or false random🤥 
const promise1=new Promise((resolve, reject) => {
    setTimeout(() => {
      isReady = [true, false][Math.floor(Math.random() * 2)];//math.floor generate index
      isReady ? resolve('your data is ready'):reject('no data today')
    }, 2000)
})//printed after 2 sec
// //we use .then if promise resolved ie sucess .then prints value like below
// //.catch is for rejection or faliure
// console.log(promise1.then(data=>console.log({data}))
// .catch(err=>console.log({err})))

//new way of writing promises in es6 is assy(mean takes time to fetch) keyword
//await is same like .then and resolve and reject asyn always return promsise to get data we use .then or await
//Ruels for assy:
//1.must be in function ,you need to use keword assyn and await (to wait for data)
// const getDog=async()=>{
//     const url='https://dog.ceo/api/breeds/image/random'
//     response= await fetch(url)
//     const data=await response.json()
//     //data contain our fetched data now can use any where
// console.log(data)
// }
// getDog()



//SOup promise 1 is created up
// const getSoup =async()=>{
//     //we use try for sucess and catch for failure(error)
//     try{

//         const soup= await promise1
//         console.log(soup)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// getSoup()

//IF WE GET SOUTP WE PAY AND TIP THE WAITER
//IF WE GOT NO SOUP WE WILL LEAVE BAD REVIEW
const getSoup =async()=>{
    //we use try for sucess and catch for failure(error)
    const data={rating:0,tip:0,review:0}
    try{

        const soup= await promise1
        console.log(soup)
        data.rating=6
        data.pay=10
        data.tip=.2
        return data
    }
    catch(err){
        console.log(err)
        data.rating=1
        data.pay=0
        data.tip=0
        return data
    }
}
getSoup().then(value=>console.log(value))
//.then hepls to get data back or can use a wait
