// //reduce to sum of all values
// //reduce takes two arg one function secondary arg starts with 0
// //reduce takes function as an argument thats why we call it higher order function
// const nums=[1,2,3,4,5,6,7,8,9,10];
// const sum=nums.reduce((acc,curr)=>acc+curr);
// // console.log(sum);
// //or
// function sum(a,b) {
//     return a+b
// }
const num=[1,2,3,4,5,6,7,8,9,10];
// const sum1=num.reduce(sum);
// or
const sum1=num.reduce((a,b)=>a+b,0);
  console.log(sum1);
const actors = [
      { name: 'johnny', netWorth: 2000000 },
      { name: 'amber', netWorth: 10 },
      { name: 'matt', netWorth: 170000000 },
      { name: 'brad', netWorth: 300000000 },
      { name: 'leonardo', netWorth: 10000000 },
    ]
    console.log(actors.reduce((prev, curr) => prev + curr.netWorth, 0))