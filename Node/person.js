const person="robin";
const people=["robin","john","kome"];
// console.log(person);
// console.log(people);
// to export only one we can use
module.exports =person;
// to export both we use syntax like this


module.exports={
    //works on key value pair in es6 if both value and key are same then remove value
    // person:person,
    // people:people,
//same as 
people,person,
}