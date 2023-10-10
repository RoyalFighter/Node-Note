//two way to import and export
//commonjs and ES module
//es module is like in reactr import abc from "./....."


 //eg of  commonjs =>i have another file called prson now i want to use this in app

 //1st
//  const abc=require("./person")//name of file after require
 //now you can run file this concept divides the files in smaller unit this concept is also callled sepration of concern

// console.log(abc);
// to access object
// console.log(abc.people);
// console.log(abc.person);

//destructur to get rid of abc

const {person,people}=require("./person");
console.log(people);
console.log(person);

//--------------------------------
// const greet=(name)=>{
//     console.log(`Hello ${name}`);
// }

// greet('Mrs');
//on console node app to run this
// console.log(global);

// globalThis.setInterval(()=>{
//     console.log("learning mern Stack");
// },3000);

// console.log(__dirname);
// console.log(__filename);



//module is collection of single or multipple file which can contain code
//it helps in import and export

//core module are inbuilt module of node
//eg is
const os=require("os");//inside double quote
const path= require("path");//can console log this also
console.log(os);//returns object
//if needed more specific\
console.log(os.platform());